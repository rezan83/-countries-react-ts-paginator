import React, { FC } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setSearchQuery } from '../redux/country/countrySlice';

const SearchCountries: FC = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(state => state.countryR.searchQuery);

  const handelSearchChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    dispatch(setSearchQuery(event.target.value));
  };

  const resetSearch = () => {
    dispatch(setSearchQuery(''));
  };

  return (
    <Box className="search-countries" w="80%" m="2rem auto">
      <FormControl display="flex" flexWrap="wrap" alignItems="end" justifyContent="space-between">
        <Box w="70%">
          <FormLabel>Search Name</FormLabel>
          <Input type="search" value={searchText} onChange={handelSearchChange} />
        </Box>
        <Box>
          <Button onClick={resetSearch} bg="red.400">
            Reset
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchCountries;
