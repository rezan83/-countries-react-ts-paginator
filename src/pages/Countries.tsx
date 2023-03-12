import React, { FC } from 'react';
import CountriesList from '../components/CountriesList';
import SearchCountries from '../components/SearchCountries';
import SortCountries from '../components/SortCountries';
import './countries.scss';

interface ICountriesProps {
  showFavorite?: boolean;
}
const Countries: FC<ICountriesProps> = ({ showFavorite }) => {
  return (
    <div className="countries">
      <SearchCountries />
      <SortCountries />
      <CountriesList showFavorite={showFavorite} />
    </div>
  );
};

export default Countries;
