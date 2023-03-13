import React, { FC } from 'react';
import { Table, Tbody, TableCaption, TableContainer } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICountry } from '../../interfaces/country';
import Country from './Country';
import CountriesTHeader from './CountriesTHeader';
import Paginator from '../Paginator';
import { setSelectedPage } from '../../redux/country/countrySlice';

interface ICountriesProps {
  showFavorite?: boolean;
}
const CountriesList: FC<ICountriesProps> = ({ showFavorite }) => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector((state: RootState) => state.countryR.searchQuery);
  const favoriteCountries = useAppSelector((state: RootState) => state.countryR.favoriteCountries);
  const sortCountriesName = useAppSelector((state: RootState) => state.countryR.sortCountriesName);
  const selectedPage = useAppSelector((state: RootState) => state.countryR.selectedPage);
  const sortCountriesPopulation = useAppSelector(
    (state: RootState) => state.countryR.sortCountriesPopulation
  );
  const { pageArr, pages } = useAppSelector((state: RootState) => {
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
      dispatch(setSelectedPage(1))
      countries = countries.filter(country => {
        return country.name.common.toLowerCase().includes(searchQuery);
      });
    }
    const count = 10;
    const pages = Math.ceil(countries.length / count);

    let pageArr: ICountry[][] = [];
    for (let index = 0; index < pages; index++) {
      pageArr.push(countries.slice(0 + count * index, count + count * index));
    }
    return { pageArr, pages };
  });

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="teal">
          <TableCaption>List of all countries </TableCaption>
          <CountriesTHeader />
          
          <Tbody>
            {pageArr[selectedPage].map((country: ICountry) => {
              return <Country key={country.name.common} country={country} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Paginator pages={pages} />
    </>
  );
};

export default CountriesList;
