// react router
import { Link, useParams } from "react-router-dom";
// hooks
import { useBordersCountries } from "@/hooks/useBordersCountries";
import { useCountryDetails } from "@/hooks/useCountryDetails";
// component
import DetailedInformation from "@/components/countryDetails/DetailedInformation";
import { buttonVariants } from "@/components/ui/button";
import ErrorCountryDetails from "@/components/countryDetails/ErrorCountryDetails";
import LoadingCountryDetails from "@/components/countryDetails/LoadingCountryDetails";
// icon
import { ArrowLeft } from "lucide-react";

export default function CountryDetails() {
  const { name } = useParams() as { name: string };
  const { data, isLoading, isError } = useCountryDetails(name);
  const country = data?.[0];
  const { borderCountries } = useBordersCountries(country?.borders);

  if (isError) {
    return <ErrorCountryDetails name={name} />;
  }

  if (isLoading) {
    return <LoadingCountryDetails />;
  }

  return (
    <div>
      <Link
        className={`mb-12 flex-initial gap-3 ${buttonVariants({
          variant: "secondary",
        })}`}
        to={"/"}
      >
        <ArrowLeft />
        <span>Back</span>
      </Link>

      <DetailedInformation
        country={country}
        borderCountries={borderCountries}
      />
    </div>
  );
}
