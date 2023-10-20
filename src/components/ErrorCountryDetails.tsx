// react router
import { Link } from "react-router-dom";
// component
import { buttonVariants } from "./ui/button";
//icon
import { FlagOff, Home } from "lucide-react";
// type
import { ErrorCountryDetailsType } from "@/types";

export default function ErrorCountryDetails({ name }: ErrorCountryDetailsType) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12">
      <FlagOff size={200} className="h text-red-500" />
      <p className="text-2xl text-red-500">No country found called "{name}"</p>
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
