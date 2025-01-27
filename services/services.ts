import { CountryNameCodeType, CustomCountryNameCodeType } from "@/utils/types";
import { unstable_cache } from "next/cache";

export const getCountriesNameCode = unstable_cache(
  async (): Promise<CustomCountryNameCodeType[]> => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,idd"
      );
      const countries = await res.json();
      const mappedCountries = countries.map(
        (country: CountryNameCodeType): CustomCountryNameCodeType => {
          const root = country.idd?.root || "";
          const suffix =
            country.idd?.suffixes.length !== 1
              ? ""
              : country.idd?.suffixes?.[0];
          const fullCode = `${root}${suffix}`;
          const name = country.name.common;

          const nativeName =
            country.name.nativeName &&
            Object.values(country.name.nativeName)[0]?.common;

          const fullName =
            name === nativeName ? name : `${name} (${nativeName})`;
          return {
            fullName,
            fullCode,
          };
        }
      );

      mappedCountries.sort(
        (a: CustomCountryNameCodeType, b: CustomCountryNameCodeType) => {
          const nameA = a.fullName.toLowerCase();
          const nameB = b.fullName.toLowerCase();
          return nameA.localeCompare(nameB);
        }
      );

      return mappedCountries;
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw new Error("Failed to fetch countries.");
    }
  },
  ["countries"],
  { revalidate: 86400 }
);
