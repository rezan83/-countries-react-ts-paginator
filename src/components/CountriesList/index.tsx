import React, { FC } from 'react';
import {
  Table,
  Tbody,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  Box,
  Flex,
  Heading
} from '@chakra-ui/react';

import { useAppSelector } from '../../app/hooks';
import { ICountry } from '../../interfaces/country';
import Country from './Country';
import CountriesTHead from './CountriesTHead';
import { countriesState } from '../../redux/country/countrySlice';
// import Paginator, { usePaginator } from '../Paginator';
// paginator turned to npm package!
import Paginator, { usePaginator } from 'paginatorx-chakra';

interface ICountriesProps {
  showFavorite?: boolean;
  countPerPage: number;
}
const CountriesList: FC<ICountriesProps> = ({ showFavorite, countPerPage }) => {
  const countries = useAppSelector(countriesState(showFavorite));

  const { pagesCount, selectedPage, setSelectedPage, pages } = usePaginator<ICountry>(
    countries,
    countPerPage
  );
  return (
    <>
      <TableContainer>
        <Table size="sm" variant="striped" colorScheme="teal">
          <TableCaption>
            List of all countries:
            {!pages.length && (
              <Card w="clamp(300px, 80%, 80rem)" m="0 auto" p="2rem">
                <CardHeader>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Box>
                      <Heading size="sm">Sorry nothing to show</Heading>
                    </Box>
                  </Flex>
                </CardHeader>
              </Card>
            )}{' '}
          </TableCaption>

          <CountriesTHead />

          <Tbody>
            {!!pages.length &&
              pages[selectedPage].map((country: ICountry) => {
                return <Country key={country.name.common} country={country} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
      {pages.length > 1 && (
        <Paginator
          pagesCount={pagesCount}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </>
  );
};

export default CountriesList;
