import { NextResponse } from "next/server";

import { timesheets } from "@/mocks/timesheets";

export async function GET() {
  await new Promise((resolve) =>
    setTimeout(resolve, 800)
  );

  return NextResponse.json(timesheets);
}