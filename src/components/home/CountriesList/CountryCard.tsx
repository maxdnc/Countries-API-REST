// react router
import { Link } from "react-router-dom";
// component
import InfoItem from "@/components/ui/info-item";
import FavoriteButton from "@/components/ui/FavoriteButton";
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
// type
import type { CountryCardType } from "../../../types";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardType) {
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
        <FavoriteButton
          countryName={name}
          className={"absolute bottom-4 right-4"}
        />
      </Card>
    </>
  );
}
