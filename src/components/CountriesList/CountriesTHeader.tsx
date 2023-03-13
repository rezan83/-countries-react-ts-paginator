import React, { FC } from 'react';
import { Button, Switch, Thead, Th, Tr } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleSortIsApplyed, toggleSortOrder } from '../../redux/country/countrySlice';
import { RootState } from '../../app/store';

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
    <Thead>
      <Tr>
        <Th>Flag</Th>
        <Th>
          <Switch size="sm" isChecked={sortCountriesName.isApplyed} onChange={handleNameChecked} />
          <Button onClick={toggleNameOrder}>
            Name {sortCountriesName.order > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </Th>
        <Th>
          <Switch
            size="sm"
            isChecked={sortCountriesPopulation.isApplyed}
            onChange={handlePopulationChecked}
          />
          <Button onClick={togglePopulationOrder}>
            Population {sortCountriesPopulation.order > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </Th>
        <Th>Region</Th>
        <Th>Languages</Th>
        <Th>Is Favorite</Th>
      </Tr>
    </Thead>
  );
};

export default SortCountries;
