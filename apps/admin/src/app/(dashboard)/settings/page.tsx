export default function SettingsPage() {
  return (
    <section className="space-y-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          System
        </p>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Settings
        </h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Configure roles, permissions, notifications, and platform policies.
      </p>
    </section>
  );
}
