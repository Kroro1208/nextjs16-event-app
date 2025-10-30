import type { IEvent } from "@/database";
import { Event } from "@/database";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

/**
 * Route parameters interface for type safety
 */
interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * API response type for standardized error messages
 */
interface ErrorResponse {
  error: string;
  details?: string;
}

/**
 * GET /api/events/[slug]
 * Retrieves a single event by its slug
 *
 * @param request - Next.js request object
 * @param context - Route context containing params
 * @returns JSON response with event data or error
 */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    // Extract and await the slug parameter from route context
    const { slug } = await params;

    // Validate slug parameter exists
    if (!slug) {
      return NextResponse.json<ErrorResponse>(
        { error: "Slug parameter is required" },
        { status: 400 }
      );
    }

    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json<ErrorResponse>(
        {
          error: "Invalid slug format",
          details:
            "Slug must contain only lowercase letters, numbers, and hyphens",
        },
        { status: 400 }
      );
    }

    // Establish database connection
    await connectDB();

    // Query the database for the event with the given slug
    const event = await Event.findOne({ slug }).lean<IEvent>().exec();

    // Handle event not found
    if (!event) {
      return NextResponse.json<ErrorResponse>(
        {
          error: "Event not found",
          details: `No event exists with slug: ${slug}`,
        },
        { status: 404 }
      );
    }

    // Return the event data with 200 OK status
    return NextResponse.json<IEvent>(event, { status: 200 });
  } catch (error) {
    // Log error for debugging (consider using a proper logging service in production)
    console.error("Error fetching event by slug:", error);

    // Handle unexpected errors with 500 status
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json<ErrorResponse>(
      {
        error: "Internal server error",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
