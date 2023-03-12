import React, { FC } from 'react';
import { Card, Heading, Text, SimpleGrid, Button, Switch } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleSortIsApplyed, toggleSortOrder } from '../redux/country/countrySlice';
import { RootState } from '../app/store';

const SortCountries: FC = () => {
  const dispatch = useAppDispatch();
  const sortCountriesName = useAppSelector((state: RootState) => state.countryR.sortCountriesName);
  const sortCountriesPopulation = useAppSelector(
    (state: RootState) => state.countryR.sortCountriesPopulation
  );

  const handleNameChecked = () => {
    dispatch(toggleSortIsApplyed('name'));
  };
  const handlePopulationChecked = () => {
    dispatch(toggleSortIsApplyed('population'));
  };
  const toggleNameOrder = () => {
    dispatch(toggleSortOrder('name'));
  };
  const togglePopulationOrder = () => {
    dispatch(toggleSortOrder('population'));
  };
  return (
    <Card
      className="sort-countries country-card"
      style={{ alignContent: 'center' }}
      overflow="hidden"
      variant="outline">
      <SimpleGrid
        className="country-card_grid"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        <Text py="2">Flag</Text>

        <Heading size="md">
          <Switch size="sm" isChecked={sortCountriesName.isApplyed} onChange={handleNameChecked} />
          <Button onClick={toggleNameOrder}>
            Name {sortCountriesName.order > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </Heading>

        <Text py="2">
          <Switch
            size="sm"
            isChecked={sortCountriesPopulation.isApplyed}
            onChange={handlePopulationChecked}
          />
          <Button onClick={togglePopulationOrder}>
            Population {sortCountriesPopulation.order > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </Text>

        <Text py="2">Region</Text>
        <Text py="2">Languages</Text>
        <Text py="2">Is Favorite</Text>
      </SimpleGrid>
    </Card>
  );
};

export default SortCountries;
