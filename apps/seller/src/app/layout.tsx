import type { ReactNode } from "react";

export const metadata = {
  title: "BazaarHub | Seller",
  description: "Seller panel for BazaarHub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "24px", fontFamily: "ui-sans-serif" }}>
          <header style={{ marginBottom: "24px" }}>
            <h1 style={{ margin: 0 }}>BazaarHub Seller</h1>
            <p style={{ margin: "8px 0 0" }}>Manage products and orders</p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
