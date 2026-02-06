import { Button } from "rizzui/button";
export default function UsersPage() {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            People
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            User management
          </h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Block or unblock user accounts.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="flat">Flat</Button>
        <Button variant="text">Text</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </section>
  );
}
