import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Seller dashboard</h2>
      {children}
    </section>
  );
}
