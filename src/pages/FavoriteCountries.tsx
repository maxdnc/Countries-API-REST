import { useAppSelector } from "@/redux/hook";

export default function FavoriteCountries() {
  const favoriteCountries = useAppSelector(
    (state) => state.favorites.countries,
  );
  console.log(favoriteCountries);

  if (favoriteCountries.length === 0) {
    return <p>no favorite country yet</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {favoriteCountries.map((country) => {
        return <p key={country.name.official}>{country.name.common}</p>;
      })}
    </div>
  );
}
