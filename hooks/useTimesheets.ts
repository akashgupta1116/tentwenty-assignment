import { useQuery } from "@tanstack/react-query";

import timesheetService from "@/services/timesheet.service";

export const useTimesheets = () =>
  useQuery({
    queryKey: ["timesheets"],
    queryFn: () =>
      timesheetService.getAll(),
  });