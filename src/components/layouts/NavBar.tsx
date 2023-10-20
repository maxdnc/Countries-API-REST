// react router
import { Link, NavLink } from "react-router-dom";
// component
import { ModeToggle } from "../ui/mode-toggle";
import { buttonVariants } from "../ui/button";
// icon
import { Heart } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="mb-4 flex items-center justify-between gap-4 border-border bg-background p-6 shadow dark:border-b">
      <Link to="/" className="font-bold text-primary">
        Where is the world ?
      </Link>
      <div className="flex gap-4">
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            `${buttonVariants({
              variant: "outline",
              className: isActive && "bg-secondary",
            })}`
          }
        >
          <Heart size={18} strokeWidth={2.5} color="#F337E6" />
        </NavLink>

        <ModeToggle />
      </div>
    </nav>
  );
}
