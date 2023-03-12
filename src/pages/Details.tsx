import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
  CardBody,
  Image,
  CardFooter,
  Button,
  Avatar
} from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { StarIcon } from '@chakra-ui/icons';
import { toggleFavorite } from '../redux/country/countrySlice';
import { RootState } from '../app/store';

const Details: FC = () => {
  const showCountry = useAppSelector((state: RootState) => state.countryR.showCountry);
  const isfavorite = useAppSelector((state: RootState) =>
    showCountry ? state.countryR.favoriteCountries.includes(showCountry.name.common) : false
  );

  const dispatch = useAppDispatch();
  const toggleFavoriteHandel = () => {
    dispatch(toggleFavorite(showCountry?.name.common));
  };
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex
          gap="4"
          // spacing="4"
        >
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={showCountry?.coatOfArms.png} />
            <Box>
              <Heading size="sm">{showCountry?.name.official}</Heading>
              <Text>{showCountry?.capital}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          Official Name: {showCountry?.name.official} Region {showCountry?.region} Subregion{' '}
          {showCountry?.subregion} Capital: {showCountry?.capital && showCountry?.capital[0]}{' '}
          Population: {showCountry?.population} Official Languages:{' '}
          {showCountry?.languages && Object.values(showCountry?.languages).map(lang => lang)} Money:{' '}
          {showCountry?.currencies && Object.values(showCountry?.currencies).map(curr => curr.name)}{' '}
          Area: {showCountry?.area} square kilometers
        </Text>
      </CardBody>
      <Image objectFit="cover" src={showCountry?.flags.png} alt="Chakra UI" />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px'
          }
        }}>
        <a href={showCountry?.maps.googleMaps} target="_blank" rel="noreferrer">
          <Button flex="1" variant="ghost" leftIcon={<BiMap />}></Button>
        </a>

        <Button onClick={toggleFavoriteHandel}>
          <StarIcon color={isfavorite ? 'yellow' : ''} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Details;
