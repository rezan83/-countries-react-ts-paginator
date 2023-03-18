import React, { FC } from 'react';
import { Table, Tbody, TableCaption, TableContainer } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ICountry } from '../../interfaces/country';
import Country from './Country';
import CountriesTHead from './CountriesTHead';
import Paginator from '../Paginator';
import { pageState, setSelectedPage } from '../../redux/country/countrySlice';

interface ICountriesProps {
  showFavorite?: boolean;
  countPerPage: number;
}
const CountriesList: FC<ICountriesProps> = ({ showFavorite, countPerPage }) => {
  const dispatch = useAppDispatch();
  const { pagesArray, pagesCount } = useAppSelector(pageState(countPerPage, showFavorite));

  const selectedPage = useAppSelector((state: RootState) => {
    return state.countryR.selectedPage > pagesCount - 1 ? 0 : state.countryR.selectedPage;
  });
  const setPage = (num: number) => dispatch(setSelectedPage(num));

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="teal">
          <TableCaption>List of all countries </TableCaption>
          <CountriesTHead />

          <Tbody>
            {pagesArray.length > 0 &&
              pagesArray[selectedPage].map((country: ICountry) => {
                return <Country key={country.name.common} country={country} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Paginator pagesCount={pagesCount} selectedPage={selectedPage} setSelectedPage={setPage} />
    </>
  );
};

export default CountriesList;
