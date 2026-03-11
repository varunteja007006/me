import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto p-2 md:p-4 lg:p-6 min-h-svh">{children}</div>;
}
