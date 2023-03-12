import React, { FC, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { useAppDispatch } from '../app/hooks';
import { setSearchQuery } from '../redux/country/countrySlice';
import './searchCountries.scss';

const SearchCountries: FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const handelSearchChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setSearch(event.target.value);
  };
  const submitSearch = () => {
    dispatch(setSearchQuery(search));
  };
  const resetSearch = () => {
    dispatch(setSearchQuery(''));
    setSearch('');
  };
  return (
    <Box className="search-countries">
      <FormControl display="flex" flexWrap="wrap" alignItems="end" justifyContent="space-between">
        <Box w="70%">
          <FormLabel>Search Name</FormLabel>
          <Input type="search" value={search} onChange={handelSearchChange} />
        </Box>
        <Box>
          <Button onClick={submitSearch}>
            Search <BiSearch />{' '}
          </Button>
          <Button onClick={resetSearch} bg="red">
            Reset
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchCountries;
