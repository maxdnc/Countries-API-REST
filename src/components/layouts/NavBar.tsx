// component
import { ModeToggle } from "../ui/mode-toggle";

export default function NavBar() {
  return (
    <nav className="mb-4 flex items-center justify-between gap-4 border-border bg-background p-6 shadow dark:border-b">
      <p className="font-bold text-primary">Where is the world ?</p>
      <ModeToggle />
    </nav>
  );
}
