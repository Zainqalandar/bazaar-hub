import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Admin dashboard</h2>
      {children}
    </section>
  );
}
