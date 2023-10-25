// react router
import { Link } from "react-router-dom";
// component
import { buttonVariants } from "../ui/button";
// icon
import { FlagOff, Globe2 } from "lucide-react";

export default function NoFavoriteCountries() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12">
      <FlagOff size={200} className="h text-red-500" />
      <p className="text-2xl text-red-500">No favorite countries yet</p>
      <Link
        className={`mb-12 flex-initial gap-3 ${buttonVariants({
          variant: "secondary",
        })}`}
        to={"/"}
      >
        <Globe2 />
        <span>Explore the World</span>
      </Link>
    </div>
  );
}
