import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
//icon
import { ArrowUpRight } from "lucide-react";
// helper
import { formatNumberWithCommas } from "@/helper/math";

interface CountryCardType {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flag: string;
}

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardType) {
  return (
    <>
      <Card className="group relative h-[405px] max-w-xs overflow-hidden shadow-lg transition-transform hover:scale-[1.025]">
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
            <Link to="/country">
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
            <p>
              Population:{" "}
              <span className="tracking-wide text-primary/70">
                {formatNumberWithCommas(population)}
              </span>
            </p>
            <p>
              Region: <span className="text-primary/70">{region}</span>
            </p>
            <p>
              Capital: <span className="text-primary/70">{capital}</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="py-5" />
      </Card>
    </>
  );
}
