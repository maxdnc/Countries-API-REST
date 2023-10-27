// react router
import { Link } from "react-router-dom";
// redux
import { useAppSelector } from "@/redux/hook";
// component
import TableFavoritesCountries from "../components/favoritesCountries/TableFavoritesCountries";
import NoFavoriteCountries from "@/components/favoritesCountries/NoFavoriteCountries";
import { buttonVariants } from "@/components/ui/button";
// icon
import { Plus } from "lucide-react";

export default function FavoriteCountries() {
  const favoriteCountries = useAppSelector(
    (state) => state.favorites.countries,
  );

  if (favoriteCountries.length === 0) {
    return <NoFavoriteCountries />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <TableFavoritesCountries />
      <Link
        className={`mb-12 flex-initial gap-3 ${buttonVariants({
          variant: "secondary",
        })}`}
        to={"/"}
      >
        <Plus />
        <span>Find more countries</span>
      </Link>
    </div>
  );
}
