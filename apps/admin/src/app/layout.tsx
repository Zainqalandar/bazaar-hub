import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "BazaarHub | Admin",
  description: "Admin panel for BazaarHub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
