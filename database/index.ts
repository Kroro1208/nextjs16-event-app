/**
 * Database Models Export
 * Centralized export for all Mongoose models
 */

export { default as Event } from "./event.model";
export { default as Booking } from "./booking.model";

// Re-export TypeScript interfaces for use throughout the application
export type { IEvent } from "./event.model";
export type { IBooking } from "./booking.model";
