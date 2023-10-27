// component
import { Button } from "./button";
// hook
import { useCountryDetails } from "@/hooks/useCountryDetails";
import { useToast } from "./use-toast";
// redux
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  addFavorite,
  removeFavorite,
} from "@/redux/features/favoriteCountriesSlice";
// icon
import { Heart } from "lucide-react";
// type
import type { FavoriteButtonType } from "../../types";

export default function FavoriteButton({
  countryName,
  className,
}: FavoriteButtonType) {
  const { data: country } = useCountryDetails(countryName);
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const favoriteCountries = useAppSelector(
    (state) => state.favorites.countries,
  );
  const countryData = country?.[0];
  const isInFavorite = favoriteCountries.some(
    (favorite) => favorite.name.official === countryData?.name.official,
  );
  const handleClick = () => {
    if (country) {
      const countryData = country[0];
      const isAlreadyInFavorite = favoriteCountries.some(
        (favorite) => favorite.name.official === countryData.name.official,
      );
      if (!isAlreadyInFavorite) {
        dispatch(addFavorite(countryData));

        toast({
          className: "bg-secondary font-bold",
          description: `${countryData.name.official} Added to favorites countries list !`,
        });
      } else {
        dispatch(removeFavorite(countryData.name.official));
        toast({
          className: "bg-destructive font-bold",
          description: `${countryData.name.official} Deleted from your favorites countries list !`,
        });
      }
    } else {
      console.error("Country data is undefined. Cannot add to favorites.");
    }
  };
  return (
    <Button
      variant="secondary"
      className={`${className} z-50 transition hover:bg-fuchsia-600 active:bg-primary-foreground  ${
        isInFavorite ? "bg-fuchsia-500 hover:bg-fuchsia-600" : ""
      }`}
      onClick={handleClick}
    >
      <Heart size={18} strokeWidth={2.5} />
      <span className="sr-only ">
        {isInFavorite ? "Delete from favorite" : "Add to favorite"}
      </span>
    </Button>
  );
}
