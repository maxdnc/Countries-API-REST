import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowUpRight } from "lucide-react";

interface CountriesCardType {
  name: string;
  population: string;
  region: string;
  capital: string;
}

export default function CountryCard({
  name,
  population,
  region,
  capital,
}: CountriesCardType) {
  return (
    <>
      <Card className="group relative max-w-xs shadow-lg transition hover:scale-[1.025]">
        <CardHeader>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
            alt=""
            className="aspect-[133/80] max-h-40 object-fill"
            loading="lazy"
            decoding="async"
          />
        </CardHeader>

        <CardContent className="py-4">
          <CardTitle className="py-4">
            <Link to="/country">
              <span className=" absolute inset-0"></span>
              <div className="flex items-center gap-4">
                <span>{name}</span>
                <span>
                  <ArrowUpRight className="group-hover:animate-wiggle " />
                </span>
              </div>
            </Link>
          </CardTitle>
          <div className="flex flex-col gap-1">
            <p>
              Population: <span>{population}</span>{" "}
            </p>
            <p>
              Region: <span>{region}</span>{" "}
            </p>
            <p>
              Capital:<span>{capital}</span>{" "}
            </p>
          </div>
        </CardContent>
        <CardFooter className="py-5" />
      </Card>
    </>
  );
}
