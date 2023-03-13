import React, { FC } from 'react';
import {
  Card,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Button,
  useDisclosure,
  Alert,
  AlertIcon,
  Box,
  AlertDescription,
  AlertTitle,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchCountryByName, toggleFavorite } from '../../redux/country/countrySlice';
import { ICountry } from '../../interfaces/country';

interface ICountryProps {
  country: ICountry;
}

const Country: FC<ICountryProps> = ({ country }) => {
  const isfavorite = useAppSelector((state: RootState) =>
    state.countryR.favoriteCountries.includes(country.name.common)
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
  const toggleFavoriteHandel = () => {
    dispatch(toggleFavorite(country.name.common));
    if (!isfavorite) {
      onOpen();
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const showDetailsPage = () => {
    dispatch(fetchCountryByName(country.name.common));
    navigate('/details');
  };
  return (
    <Card
      className="country-card"
      style={{ alignContent: 'center' }}
      overflow="hidden"
      variant="outline">
      <SimpleGrid
        className="country-card_grid"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={country.flags.png}
          alt="Caffe Latte"
        />
        <Button>
          <Heading size="md" onClick={showDetailsPage}>
            {country.name.common} <ArrowForwardIcon />
          </Heading>
        </Button>

        <Text py="2">{country.population}</Text>

        <Text py="2">{country.region}</Text>
        <UnorderedList>
          {country.languages &&
            Object.values(country.languages).map(lang => {
              return <ListItem key={lang}>{lang}</ListItem>;
            })}
        </UnorderedList>
        <Button onClick={toggleFavoriteHandel}>
          <StarIcon color={isfavorite ? 'yellow.400' : ''} />
        </Button>
      </SimpleGrid>

      {isVisible && (
        <Alert status="success">
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{country.name.common} added to favorites</AlertDescription>
          </Box>
        </Alert>
      )}
    </Card>
  );
};

export default Country;
