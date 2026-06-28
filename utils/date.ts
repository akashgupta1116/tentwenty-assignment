export function formatDateRange(
    startDate: string,
    endDate: string
  ) {
    const start = new Date(startDate);
  
    const end = new Date(endDate);
  
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
  
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} - ${end.toLocaleDateString(
      "en-US",
      options
    )}, ${end.getFullYear()}`;
  }