import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
//icon
import { ArrowUpRight, Heart } from "lucide-react";
// helper
import { formatNumberWithCommas } from "@/helper/math";
import InfoItem from "@/components/ui/info-item";
// type
import type { CountryCardType } from "../../../types";
import { Button } from "@/components/ui/button";
// hook
import { useToast } from "@/components/ui/use-toast";
import { useCountryDetails } from "@/hooks/useCountryDetails";
// redux
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  addFavorite,
  removeFavorite,
} from "@/redux/features/favoriteCountriesSlice";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardType) {
  const { toast } = useToast();
  const { data: country } = useCountryDetails(name);
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
    <>
      <Card className="group relative h-[450px] max-w-xs overflow-hidden shadow-lg  ">
        <CardHeader>
          <img
            src={flag}
            alt=""
            className="aspect-[133/80]  object-cover"
            loading="lazy"
            decoding="async"
          />
        </CardHeader>

        <CardContent className="py-4">
          <CardTitle className="py-4">
            <Link to={`/country/${name}`}>
              <span className="absolute inset-0"></span>
              <div className="flex items-center gap-4">
                <span>{name}</span>
                <span>
                  <ArrowUpRight className="group-hover:animate-wiggle " />
                </span>
              </div>
            </Link>
          </CardTitle>
          <div className="flex flex-col gap-1 ">
            <InfoItem
              label="Population"
              value={formatNumberWithCommas(population)}
            />
            <InfoItem label="Region" value={region} />
            <InfoItem label="Capital" value={capital} />
          </div>
        </CardContent>
        <CardFooter className="px-5 py-4"></CardFooter>
        <Button
          variant="secondary"
          className={`absolute bottom-4 right-4 z-50 transition  hover:bg-fuchsia-600 active:bg-primary-foreground  ${
            isInFavorite ? "bg-fuchsia-500 hover:bg-fuchsia-600" : ""
          }`}
          onClick={handleClick}
        >
          <Heart size={18} strokeWidth={2.5} />
          <span className="sr-only ">
            {isInFavorite ? "Delete from favorite" : "Add to favorite"}
          </span>
        </Button>
      </Card>
    </>
  );
}
