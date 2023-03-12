import React, { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Country from './Country';
import { ICountry } from '../../interfaces/country';

interface ICountriesProps {
  showFavorite?: boolean;
}
const CountriesList: FC<ICountriesProps> = ({ showFavorite }) => {
  const searchQuery = useAppSelector((state: RootState) => state.countryR.searchQuery);
  const favoriteCountries = useAppSelector((state: RootState) => state.countryR.favoriteCountries);
  const sortCountriesName = useAppSelector((state: RootState) => state.countryR.sortCountriesName);
  const sortCountriesPopulation = useAppSelector(
    (state: RootState) => state.countryR.sortCountriesPopulation
  );
  const countries = useAppSelector((state: RootState) => {
    let countries = [...state.countryR.countries];
    if (sortCountriesName.isApplyed) {
      countries.sort((country1, country2) => {
        if (country1.name.common > country2.name.common) {
          return sortCountriesName.order;
        }
        if (country1.name.common < country2.name.common) {
          return -sortCountriesName.order;
        }
        return 0;
      });
    }
    if (sortCountriesPopulation.isApplyed) {
      countries.sort(
        (country1, country2) =>
          sortCountriesPopulation.order * (country1.population - country2.population)
      );
    }
    if (showFavorite) {
      countries = countries.filter(country => {
        return favoriteCountries.includes(country.name.common);
      });
    }
    if (searchQuery) {
      countries = countries.filter(country => {
        return country.name.common.toLowerCase().includes(searchQuery);
      });
    }

    return countries;
  });

  return (
    <>
      {countries.map((country: ICountry) => {
        return <Country key={country.name.common} country={country} />;
      })}
    </>
  );
};

export default CountriesList;
