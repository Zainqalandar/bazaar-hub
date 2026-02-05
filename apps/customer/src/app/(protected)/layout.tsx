import type { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h2>Customer account</h2>
      {children}
    </section>
  );
}
