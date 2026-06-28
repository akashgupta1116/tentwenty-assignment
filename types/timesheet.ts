export type TimesheetStatus =
  | "COMPLETED"
  | "INCOMPLETE"
  | "MISSING";

export interface Timesheet {
  id: number;
  weekNumber: number;
  startDate: string;
  endDate: string;
  totalHours: number;
  status: TimesheetStatus;
}