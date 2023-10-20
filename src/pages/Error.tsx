// react router
import { Link } from "react-router-dom";
// component
import { buttonVariants } from "../components/ui/button.tsx";
//icon
import { Ban, Home } from "lucide-react";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12">
      <Ban size={200} className="h text-red-500" />
      <p className="text-2xl text-red-500">Something went wrong !</p>
      <Link
        className={`mb-12 flex-initial gap-3 ${buttonVariants({
          variant: "secondary",
        })}`}
        to={"/"}
      >
        <Home />
        <span>Back to Home </span>
      </Link>
    </div>
  );
}
