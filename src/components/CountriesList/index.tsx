import React, { FC } from 'react';
import { Table, Tbody, TableCaption, TableContainer } from '@chakra-ui/react';

import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICountry } from '../../interfaces/country';
import Country from './Country';
import CountriesTHeader from './CountriesTHeader';
import Paginator from '../Paginator';
import { pageState } from '../../redux/country/countrySlice';

interface ICountriesProps {
  showFavorite?: boolean;
}
const CountriesList: FC<ICountriesProps> = ({ showFavorite }) => {
  const countPerPage = 10;
  const { pageArray, pages } = pageState(
    countPerPage,
    showFavorite
  )(useAppSelector(state => state));

  const selectedPage = useAppSelector((state: RootState) => {
    return state.countryR.selectedPage > pages - 1 ? 0 : state.countryR.selectedPage;
  });

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="teal">
          <TableCaption>List of all countries </TableCaption>
          <CountriesTHeader />

          <Tbody>
            {pageArray[selectedPage].map((country: ICountry) => {
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
