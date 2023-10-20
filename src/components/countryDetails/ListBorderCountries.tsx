import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { ListBorderCountriesType } from "@/types";

export default function ListBorderCountries({
  borderCountries,
}: ListBorderCountriesType) {
  return (
    <ul className=" group/list my-4 flex flex-wrap items-center gap-2 ">
      {borderCountries.length > 0 ? (
        borderCountries.map((country) => {
          return (
            <li
              key={country.name.official}
              className="hover:!opacity-100 group-hover/list:opacity-50"
            >
              <Link
                className={buttonVariants({ variant: "outline" })}
                to={`/country/${country.name.official}`}
              >
                <span>{country.name.common}</span>
              </Link>
            </li>
          );
        })
      ) : (
        <p>None</p>
      )}
    </ul>
  );
}
