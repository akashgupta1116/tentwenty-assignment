"use client";

import Link from "next/link";

import { Timesheet } from "@/types/timesheet";

import StatusBadge from "./StatusBadge";
import { formatDateRange } from "@/utils/date";

interface Props {
  timesheet: Timesheet;
}

export default function TimesheetRow({
  timesheet,
}: Props) {
  return (
    <tr className="border-b">
      <td className="py-5">
        Week {timesheet.weekNumber}
      </td>

      <td>
            {formatDateRange(
            timesheet.startDate,
            timesheet.endDate
        )}
      </td>

      <td>
        <StatusBadge
          status={timesheet.status}
        />
      </td>

      <td>
        <Link
          href={`/timesheet/${timesheet.id}`}
          className="font-medium text-[#2B64F1]"
        >
          View
        </Link>
      </td>
    </tr>
  );
}