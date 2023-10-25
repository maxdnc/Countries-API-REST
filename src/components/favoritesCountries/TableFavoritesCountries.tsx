// react router
import { useNavigate } from "react-router-dom";
// component
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// redux
import { removeFavorite } from "@/redux/features/favoriteCountriesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
// hook
import { useToast } from "@/components/ui/use-toast";
// helper
import { formatNumberWithSpaces } from "../../helper/math";
// icon
import { Trash2 } from "lucide-react";

export default function TableFavoritesCountries() {
  const favoriteCountries = useAppSelector(
    (state) => state.favorites.countries,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDelete = (
    event: React.MouseEvent<HTMLElement>,
    countryName: string,
  ) => {
    event.stopPropagation();
    dispatch(removeFavorite(countryName));
    toast({
      className: "bg-destructive",
      description: `${countryName} deleted from your favorites countries list`,
    });
  };
  return (
    <Table className="mx-auto max-w-2xl">
      <TableCaption>A list of your favorites countries.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Flag</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Population</TableHead>
          <TableHead>Capital</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {favoriteCountries.map((country) => {
          return (
            <TableRow
              key={country.name.official}
              onClick={() => navigate(`/country/${country.name.official}`)}
              className="cursor-pointer"
            >
              <TableCell className="font-medium">{country.flag}</TableCell>
              <TableCell>{country.name.common}</TableCell>
              <TableCell>
                {formatNumberWithSpaces(country.population)}
              </TableCell>
              <TableCell>{country.capital}</TableCell>
              <TableCell className="text-center">
                <Button
                  className="z-20 hover:bg-destructive"
                  variant="ghost"
                  onClick={(event) =>
                    handleDelete(event, country.name.official)
                  }
                >
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
