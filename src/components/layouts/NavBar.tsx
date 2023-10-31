// react router
import { Link, NavLink } from "react-router-dom";
// component
import { ModeToggle } from "../ui/mode-toggle";
import { buttonVariants } from "../ui/button";
// icon
import { Heart } from "lucide-react";

export default function NavBar() {
  return (
    <header className="mb-4  border-border bg-background p-6 shadow dark:border-b ">
      <nav
        className="function name(params:type) { } mx-auto flex max-w-[1440px] items-center justify-between   
      gap-4"
      >
        <Link to="/" className="font-bold text-primary">
          Where in the world ?
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
            <span className="sr-only md:not-sr-only md:ml-4 md:inline-block">
              Favorite
            </span>
          </NavLink>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
