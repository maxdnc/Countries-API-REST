// helper
import { getCurrencies, getNativeName } from "@/helper/dataHelpers";
import { formatNumberWithCommas } from "@/helper/math";
// type
import { DetailedInformationType } from "@/types";
// component
import InfoItem from "../ui/info-item";
import ListBorderCountries from "./ListBorderCountries";

export default function DetailedInformation({
  country,
  borderCountries,
}: DetailedInformationType) {
  return (
    <div className="p-2">
      <img
        className="w-full max-w-md"
        src={country?.flags.svg}
        alt={`Flag from ${country?.name.common} `}
      />

      <h2 className="my-10 text-3xl">{country?.name.official}</h2>
      <div className="flex flex-col gap-10">
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

      <h3 className="mt-8 text-2xl">Border Countries: </h3>
      <ListBorderCountries borderCountries={borderCountries} />
    </div>
  );
}
