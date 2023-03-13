import React from 'react';
import { Box, Flex, Button, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

export default function Nav() {
  const favoriteCount = useAppSelector(state => state.countryR.favoriteCountries.length);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box className="navbar" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/">
            <Box fontSize={'2rem'}>Logo</Box>
          </Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button>
                <Link to="/countries">Countries</Link>
              </Button>
              <Button>
                <Link to="/details">Details</Link>
              </Button>
              <Button>
                <Link to="/favorite">
                  <StarIcon color={favoriteCount ? 'yellow.400' : ''} />
                  {favoriteCount}
                </Link>
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
