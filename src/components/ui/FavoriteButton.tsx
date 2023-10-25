import { useCountryDetails } from "@/hooks/useCountryDetails";
import { Button } from "./button";
import { useToast } from "./use-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  addFavorite,
  removeFavorite,
} from "@/redux/features/favoriteCountriesSlice";
import { Heart } from "lucide-react";
import type { FavoriteButtonType } from "../../types";

export default function FavoriteButton({
  countryName,
  className,
}: FavoriteButtonType) {
  const { toast } = useToast();
  const { data: country } = useCountryDetails(countryName);
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
          className: "bg-secondary",
          description: `${name} added to favorites countries list !`,
        });
      } else {
        dispatch(removeFavorite(countryData.name.official));
        toast({
          className: "bg-destructive",
          description: `${name} deleted from your favorites countries list`,
        });
      }
    } else {
      console.error("Country data is undefined. Cannot add to favorites.");
    }
  };
  return (
    <Button
      variant="secondary"
      className={`${className} z-50 transition  hover:bg-fuchsia-600 active:bg-primary-foreground  ${
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
