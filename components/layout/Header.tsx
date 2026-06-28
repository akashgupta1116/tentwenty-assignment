"use client";

import { signOut } from "next-auth/react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Timesheets
        </h2>

        <p className="text-sm text-gray-500">
          Manage your weekly work logs
        </p>
      </div>

      <button
        onClick={() => signOut()}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
      >
        Logout
      </button>
    </header>
  );
}