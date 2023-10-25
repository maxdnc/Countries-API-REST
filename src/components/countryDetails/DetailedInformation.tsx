// helper
import { getCurrencies, getNativeName } from "@/helper/dataHelpers";
import { formatNumberWithCommas } from "@/helper/math";
// type
import { DetailedInformationType } from "@/types";
// component
import InfoItem from "../ui/info-item";
import ListBorderCountries from "./ListBorderCountries";
import FavoriteButton from "../ui/FavoriteButton";

export default function DetailedInformation({
  country,
  borderCountries,
}: DetailedInformationType) {
  return (
    <div className=" p-2 xl:flex xl:flex-row xl:justify-between xl:gap-20">
      <div className="xl:flex xl:items-center xl:justify-center">
        <img
          className="w-full max-w-md xl:max-w-xl xl:self-start"
          src={country?.flags.svg}
          alt={`Flag from ${country?.name.common} `}
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-4 xl:justify-between">
          <h2 className="my-10 text-3xl">{country?.name.official}</h2>
          <FavoriteButton countryName={country?.name.official} />
        </div>
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col gap-2">
            <InfoItem
              label="Native Name"
              value={getNativeName(country?.name.nativeName)}
            />
            <InfoItem
              label="Population"
              value={formatNumberWithCommas(country?.population)}
            />
            <InfoItem label="Region" value={country?.region} />
            <InfoItem label="Sub Region" value={country?.subregion} />
            <InfoItem label="Capital" value={country?.capital?.[0]} />
          </div>
          <div className="flex flex-col gap-2">
            <InfoItem label="Top Level Domain" value={country?.tld[0]} />
            <InfoItem
              label="Currencies"
              value={getCurrencies(country?.currencies)}
            />
            <InfoItem
              label="Languages"
              value={Object.values(country?.languages || { lang: "None" })}
            />
          </div>
        </div>
        <div className="mt-8 max-w-3xl xl:flex xl:items-center xl:gap-6">
          <h3 className="whitespace-nowrap text-xl">Border Countries: </h3>
          <ListBorderCountries borderCountries={borderCountries} />
        </div>
      </div>
    </div>
  );
}
