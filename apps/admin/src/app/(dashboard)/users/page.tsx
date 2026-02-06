import { Button } from "rizzui/button";
export default function UsersPage() {
  return (
    <section>
      <h3>User management</h3>
      <p className="text-sm text-red-800">Block or unblock user accounts.</p>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="text">Text</Button>
      <Button variant="danger">Danger</Button>
    </section>
  );
}
