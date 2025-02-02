
/**
 * Get the current date in the format 'dd MMM yyyy'
 * @param date 
 * @returns 
 */
// This is not right yet.
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
