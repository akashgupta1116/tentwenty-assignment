import { Timesheet } from "@/types/timesheet";

export const timesheets: Timesheet[] = [
  {
    id: 1,
    weekNumber: 1,
    startDate: "2025-01-01",
    endDate: "2025-01-07",
    totalHours: 38,
    status: "COMPLETED",
  },
  {
    id: 2,
    weekNumber: 2,
    startDate: "2025-01-08",
    endDate: "2025-01-14",
    totalHours: 26,
    status: "INCOMPLETE",
  },
  {
    id: 3,
    weekNumber: 3,
    startDate: "2025-01-15",
    endDate: "2025-01-21",
    totalHours: 0,
    status: "MISSING",
  },
  {
    id: 4,
    weekNumber: 4,
    startDate: "2025-01-22",
    endDate: "2025-01-28",
    totalHours: 40,
    status: "COMPLETED",
  },
];