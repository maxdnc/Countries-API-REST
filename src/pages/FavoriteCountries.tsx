import { Button } from "@/components/ui/button";
import { removeFavorite } from "@/redux/features/favoriteCountriesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function FavoriteCountries() {
  const favoriteCountries = useAppSelector(
    (state) => state.favorites.countries,
  );
  const dispatch = useAppDispatch();

  if (favoriteCountries.length === 0) {
    return <p>no favorite country yet</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {favoriteCountries.map((country) => {
        return (
          <p key={country.name.official}>
            {country.name.common}{" "}
            <Button
              onClick={() => dispatch(removeFavorite(country.name.official))}
            >
              Delete
            </Button>
          </p>
        );
      })}
    </div>
  );
}
