import React, { FC } from 'react';
import { Box, Flex, Button, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSearchQuery } from '../../redux/country/countrySlice';

const Nav: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch()
  const favoriteCount = useAppSelector(
    (state: RootState) => state.countryR.favoriteCountries.length
  );
  const resetSearch = () => {
    dispatch(setSearchQuery(''))
  }

  return (
    <>
      <Box className="navbar" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/">
            <Box fontSize={'2rem'}>Logo</Box>
          </Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link to="/countries" onClick={resetSearch}>
                <Button>Countries </Button>
              </Link>

              <Link to="/details" onClick={resetSearch}>
                <Button>Details</Button>
              </Link>

              <Link to="/favorite" onClick={resetSearch}>
                <Button>
                  <StarIcon color={favoriteCount ? 'yellow.400' : ''} />
                  {favoriteCount}
                </Button>
              </Link>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
