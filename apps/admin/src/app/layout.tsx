import type { ReactNode } from "react";

export const metadata = {
  title: "BazaarHub | Admin",
  description: "Admin panel for BazaarHub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "24px", fontFamily: "ui-sans-serif" }}>
          <header style={{ marginBottom: "24px" }}>
            <h1 style={{ margin: 0 }}>BazaarHub Admin</h1>
            <p style={{ margin: "8px 0 0" }}>Platform control and analytics</p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
