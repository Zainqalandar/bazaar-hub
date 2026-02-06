"use client";

import type { ReactNode, SVGProps } from "react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActionIcon } from "rizzui/action-icon";
import { Avatar } from "rizzui/avatar";
import { Badge } from "rizzui/badge";
import { Button } from "rizzui/button";
import { cn } from "rizzui/cn";

type NavItem = {
  label: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  badge?: string;
};

const primaryNavigation: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: IconDashboard },
  { label: "Orders", href: "/orders", icon: IconOrders, badge: "128" },
  { label: "Products", href: "/products", icon: IconProducts },
  { label: "Categories", href: "/categories", icon: IconCategories },
  { label: "Reviews", href: "/reviews", icon: IconReviews },
  { label: "Reports", href: "/reports", icon: IconReports },
];

const peopleNavigation: NavItem[] = [
  { label: "Users", href: "/users", icon: IconUsers },
  { label: "Sellers", href: "/sellers", icon: IconStore, badge: "7" },
  { label: "Support", href: "/support", icon: IconSupport },
];

const systemNavigation: NavItem[] = [
  { label: "Settings", href: "/settings", icon: IconSettings },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const updateTheme = useCallback((dark: boolean) => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    window.localStorage.setItem("admin-theme", dark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("admin-theme");
    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    const shouldUseDark = storedTheme
      ? storedTheme === "dark"
      : prefersDark;

    setIsDark(shouldUseDark);
    updateTheme(shouldUseDark);
  }, [updateTheme]);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleTheme = () =>
    setIsDark((prev) => {
      const nextTheme = !prev;
      updateTheme(nextTheme);
      return nextTheme;
    });

  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const renderNavItems = (items: NavItem[]) =>
    items.map((item) => {
      const isActive = isActiveLink(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeSidebar}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
            isActive
              ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-slate-100"
          )}
        >
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-lg border text-slate-500 transition dark:text-slate-400",
              isActive
                ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                : "border-slate-200 bg-white group-hover:border-slate-300 group-hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:group-hover:border-slate-700 dark:group-hover:text-slate-100"
            )}
          >
            <item.icon className="h-5 w-5" />
          </span>
          <span className="flex-1">{item.label}</span>
          {item.badge ? (
            <Badge
              size="sm"
              variant={isActive ? "solid" : "flat"}
              color={isActive ? "primary" : "secondary"}
              className="text-[10px] font-semibold"
            >
              {item.badge}
            </Badge>
          ) : null}
        </Link>
      );
    });

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
            BH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">BazaarHub</p>
              <Badge size="sm" variant="flat" color="info" className="text-[10px]">
                Live
              </Badge>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Admin Console</p>
          </div>
        </div>
        <ActionIcon
          as="button"
          type="button"
          variant="text"
          size="sm"
          onClick={closeSidebar}
          aria-label="Close sidebar"
          className="lg:hidden"
        >
          <IconClose className="h-4 w-4" />
        </ActionIcon>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto pr-1">
        <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-900/60">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Today
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">$84.2k</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Revenue</p>
            </div>
            <Badge variant="solid" color="success" className="text-[10px]">
              +12%
            </Badge>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Orders</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">1,284</span>
          </div>
        </div>

        <div>
          <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Overview
          </p>
          <nav className="mt-3 space-y-1">{renderNavItems(primaryNavigation)}</nav>
        </div>

        <div>
          <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            People
          </p>
          <nav className="mt-3 space-y-1">{renderNavItems(peopleNavigation)}</nav>
        </div>

        <div className="border-t border-slate-200/80 pt-4 dark:border-slate-800/80">
          <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            System
          </p>
          <nav className="mt-3 space-y-1">{renderNavItems(systemNavigation)}</nav>
        </div>
      </div>

      <div className="sticky bottom-4 mt-4 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex items-center gap-3">
          <Avatar name="Ayesha Malik" initials="AM" size="sm" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Ayesha Malik</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Head of Operations</p>
          </div>
          <ActionIcon
            as="button"
            type="button"
            variant="outline"
            size="sm"
            aria-label="Profile settings"
          >
            <IconChevronRight className="h-4 w-4" />
          </ActionIcon>
        </div>
        <Button variant="solid" size="sm" className="mt-4 w-full justify-between">
          Create Report
          <IconSparkles className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col border-r border-slate-200/70 bg-white/80 p-4 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80 lg:flex">
        {sidebarContent}
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200/70 bg-white/80 px-4 py-4 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-slate-100 lg:hidden"
              aria-label="Open sidebar"
              aria-expanded={isSidebarOpen}
              aria-controls="admin-sidebar"
            >
              <IconMenu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Admin Console
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">Control Center</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 md:flex">
              <IconSearch className="h-4 w-4" />
              <input
                type="text"
                placeholder="Search orders, users, reports..."
                className="w-56 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-500"
              />
            </div>
            <ActionIcon
              as="button"
              type="button"
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
            </ActionIcon>
            <ActionIcon
              as="button"
              type="button"
              variant="outline"
              size="sm"
              aria-label="Notifications"
            >
              <IconBell className="h-4 w-4" />
            </ActionIcon>
            <ActionIcon
              as="button"
              type="button"
              variant="outline"
              size="sm"
              aria-label="Automation"
            >
              <IconSparkles className="h-4 w-4" />
            </ActionIcon>
            <Button variant="solid" size="sm" className="hidden sm:inline-flex">
              New Workflow
            </Button>
          </div>
        </header>

        <main className="px-4 py-6 lg:px-8 lg:py-8">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/80">
            {children}
          </div>
        </main>
      </div>

      {isSidebarOpen ? (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/70"
            onClick={closeSidebar}
          />
          <aside
            id="admin-sidebar"
            className="fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950"
            aria-label="Admin sidebar"
          >
            {sidebarContent}
          </aside>
        </div>
      ) : null}
    </div>
  );
}

function IconDashboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
    </svg>
  );
}

function IconOrders(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h6" />
    </svg>
  );
}

function IconProducts(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1 12a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7a3 3 0 016 0" />
    </svg>
  );
}

function IconCategories(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h7v7H4zM13 5h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

function IconReviews(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.4l6-.9L12 3z" />
    </svg>
  );
}

function IconReports(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 16V9m6 7V5m6 11v-4" />
    </svg>
  );
}

function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14a4 4 0 100-8 4 4 0 000 8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 20a6 6 0 0112 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 11a3 3 0 110-6 3 3 0 010 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 20a5 5 0 00-4-4.5" />
    </svg>
  );
}

function IconStore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9l2-4h12l2 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6v8H9z" />
    </svg>
  );
}

function IconSupport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0116 0v4a2 2 0 01-2 2h-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v3a2 2 0 002 2h2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h4a2 2 0 010 4h-2" />
    </svg>
  );
}

function IconSettings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .69.41 1.31 1.04 1.58.19.08.39.12.6.12H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
      />
    </svg>
  );
}

function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}

function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconBell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17H6a2 2 0 01-2-2c0-1.2.4-2.4 1.2-3.3A6.5 6.5 0 007 7.5a5 5 0 0110 0 6.5 6.5 0 001.8 4.2c.8.9 1.2 2.1 1.2 3.3a2 2 0 01-2 2h-3"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a3 3 0 006 0" />
    </svg>
  );
}

function IconSparkles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.6 3.7L17 8l-3.4 1.3L12 13l-1.6-3.7L7 8l3.4-1.3L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l1 2.3L22 17l-2 0.7L19 20l-1-2.3L16 17l2-0.7L19 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 14l0.8 1.8L7 16l-2.2 0.8L4 19l-0.8-2.2L1 16l2.2-0.2L4 14z" />
    </svg>
  );
}

function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12H3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12h-1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.4 6.4l-1.1-1.1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.7 18.7l-1.1-1.1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.4 17.6l-1.1 1.1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.7 5.3l-1.1 1.1" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 14.5A8.5 8.5 0 1110.5 3a7 7 0 0010.5 11.5z"
      />
    </svg>
  );
}

function IconChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
}
