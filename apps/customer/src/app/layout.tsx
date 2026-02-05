import type { ReactNode } from "react";

export const metadata = {
  title: "BazaarHub | Customer",
  description: "Customer storefront for BazaarHub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "24px", fontFamily: "ui-sans-serif" }}>
          <header style={{ marginBottom: "24px" }}>
            <h1 style={{ margin: 0 }}>BazaarHub</h1>
            <p style={{ margin: "8px 0 0" }}>Customer storefront</p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
