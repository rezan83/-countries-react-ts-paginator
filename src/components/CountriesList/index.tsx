import React, { FC } from 'react';
import { Table, Tbody, TableCaption, TableContainer } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ICountry } from '../../interfaces/country';
import Country from './Country';
import CountriesTHead from './CountriesTHead';
import { countriesState, setSelectedPage } from '../../redux/country/countrySlice';
import Paginator, { usePagesState } from '../Paginator';

interface ICountriesProps {
  showFavorite?: boolean;
  countPerPage: number;
}
const CountriesList: FC<ICountriesProps> = ({ showFavorite, countPerPage }) => {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(countriesState(showFavorite));
  const selectedPage = useAppSelector(state => state.countryR.selectedPage);
  const dispatchSetSelectedPage = (num: number) => dispatch(setSelectedPage(num));

  const { pagesCount, selectedPageOrFirst, pagesArray } = usePagesState<ICountry>(
    countries,
    countPerPage,
    selectedPage
  );

  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="teal">
          <TableCaption>List of all countries </TableCaption>
          <CountriesTHead />

          <Tbody>
            {pagesArray.length > 0 &&
              pagesArray[selectedPageOrFirst].map((country: ICountry) => {
                return <Country key={country.name.common} country={country} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Paginator
        pagesCount={pagesCount}
        selectedPage={selectedPageOrFirst}
        setSelectedPage={dispatchSetSelectedPage}
      />
    </>
  );
};

export default CountriesList;
