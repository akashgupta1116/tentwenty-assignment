import { Timesheet } from "@/types/timesheet";

import TimesheetRow from "./TimesheetRow";

interface Props {
  data: Timesheet[];
}

export default function TimesheetTable({
  data,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="min-w-[700px] w-full">
        <thead className="bg-gray-50">
          <tr className="text-left">
            <th className="p-5">
              Week
            </th>

            <th>
              Date
            </th>

            <th>
              Status
            </th>

            <th>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((timesheet) => (
            <TimesheetRow
              key={timesheet.id}
              timesheet={timesheet}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}