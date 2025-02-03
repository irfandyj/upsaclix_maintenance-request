import dayjs from "dayjs";

/**
 * Get the current date in the format 'D MMM yyyy'
 * @param date 
 * @returns 
 */
// This is not right yet.
export function formatDate(date: string): string {
  return dayjs(date).format("D MMM YYYY");
}
