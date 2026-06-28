import api from "@/lib/axios";
import { Timesheet } from "@/types/timesheet";

class TimesheetService {
  async getAll(): Promise<Timesheet[]> {
    const response = await api.get<Timesheet[]>("/timesheets");

    return response.data;
  }
}

export default new TimesheetService();