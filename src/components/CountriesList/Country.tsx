import React, { FC } from 'react';
import { Card, Image, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchCountryByName, toggleFavorite } from '../../redux/country/countrySlice';
import { ICountry } from '../../interfaces/country';
import { useNavigate } from 'react-router-dom';

interface ICountryProps {
  country: ICountry;
}

const Country: FC<ICountryProps> = ({ country }) => {
  const isfavorite = useAppSelector((state: RootState) => state.countryR.favoriteCountries.includes(country.name.common));
  // const isfavorite = favoriteCountries.includes(country.name.common);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const toggleFavoriteHandel = () => {
    dispatch(toggleFavorite(country.name.common));
  };

  const showDetailsPage = () => {
    dispatch(fetchCountryByName(country.name.common));
    navigate('/details')
  }
  return (
    <Card
      className="country-card"
      style={{ alignContent: 'center' }}
      //   direction={{ base: 'column', sm: 'row' }}
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

        <Heading size="md" onClick={showDetailsPage}>{country.name.common}</Heading>

        <Text py="2">{country.population}</Text>

        <Text py="2">{country.region}</Text>
        <ul>
          {country.languages &&
            Object.values(country.languages).map(lang => {
              return <li key={lang}>{lang}</li>;
            })}
        </ul>
        <Button onClick={toggleFavoriteHandel}>
          <StarIcon color={isfavorite ? 'yellow' : ''} />
        </Button>
      </SimpleGrid>
    </Card>
  );
};


export default Country