export const DateUtil = {
  toDate: (dateString: string): Date => {
    return new Date(dateString);
  },
  formatDate: (date: Date): string => {
    return new Intl.DateTimeFormat("ko-GB", {
      year: "numeric",
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  },
};
