import { Event } from "@/database";
import connectDB from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    let event;

    try {
      // formDataからすべてのエントリー（キーと値のペア）を取得
      event = Object.fromEntries(formData.entries());
      console.log("Parsed event:", event);
    } catch (error) {
      console.error("Error parsing form data:", error);
      return NextResponse.json(
        {
          message: "不正なフォームデータです",
        },
        { status: 400 }
      );
    }

    const file = formData.get("image") as File;
    if (!file) {
      return NextResponse.json(
        {
          message: "画像ファイルが見つかりません",
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_tyype: "image", folder: "DevEvent" },
          (error, results) => {
            if (error) return reject(error);
            resolve(results);
          }
        )
        .end(buffer);
    });

    // secure_urlは、Cloudinaryが画像アップロード後に返す画像の安全なURL
    event.image = (uploadResult as { secure_url: string }).secure_url;

    const createEvent = await Event.create(event);
    return NextResponse.json(
      { message: "イベントが正常に作成されました", event: createEvent },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      {
        message: "イベントの作成に失敗しました",
        error:
          error instanceof Error ? error.message : "不明なエラーが発生しました",
      },
      { status: 500 }
    );
  }
}
