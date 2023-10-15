// component
import { ModeToggle } from './ui/mode-toggle';

export default function NavBar() {
  return (
    <nav className="flex bg-background justify-between border-border dark:border-b items-center gap-4 p-6 shadow mb-4">
      <p className="text-primary font-bold">Where is the world ?</p>
      <ModeToggle />
    </nav>
  );
}
