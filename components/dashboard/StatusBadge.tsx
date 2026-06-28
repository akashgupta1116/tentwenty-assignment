import { Status } from "@/types/timesheet";

interface Props {
  status: Status;
}

export default function StatusBadge({
  status,
}: Props) {
  const styles = {
    COMPLETED:
      "bg-green-100 text-green-700",

    INCOMPLETE:
      "bg-yellow-100 text-yellow-700",

    MISSING:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}