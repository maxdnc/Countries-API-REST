import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
//icon
import { ArrowUpRight } from "lucide-react";
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
import { addFavorite } from "@/redux/features/favoriteCountriesSlice";

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

  const handleClick = () => {
    if (country) {
      const countryData = country[0];
      const isAlreadyInFavorite = favoriteCountries.some(
        (favorite) => favorite.name.official === countryData.name.official,
      );
      if (!isAlreadyInFavorite) {
        console.log(typeof country);
        dispatch(addFavorite(countryData));

        toast({
          className: "bg-secondary",
          description: `${name} added to favorites !`,
        });
      } else {
        toast({
          className: "bg-destructive",
          description: `${name} is already in your favorites.`,
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
        <CardFooter className="px-5 py-4">
          <Button
            variant="secondary"
            className="z-50 active:bg-primary-foreground"
            onClick={handleClick}
          >
            Favorite
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
