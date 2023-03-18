import React, { FC } from 'react';
import { Tr, Td, Image, Button, useDisclosure, UnorderedList, ListItem } from '@chakra-ui/react';
import { ArrowForwardIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchCountryByName, toggleFavorite } from '../../redux/country/countrySlice';
import { ICountry } from '../../interfaces/country';
import AddSuccess from '../AddSuccess';

interface ICountryProps {
  country: ICountry;
}

const CountryT: FC<ICountryProps> = ({ country }) => {
  const isfavorite = useAppSelector((state: RootState) =>
    state.countryR.favoriteCountries.includes(country.name.common)
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // controll add success alert
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
  const toggleFavoriteHandel = () => {
    dispatch(toggleFavorite(country.name.common));
    // show success alert for two seconds
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
    <Tr>
      <Td>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={country.flags.png}
          alt="Flag"
        />
      </Td>
      <Td>
        <Button onClick={showDetailsPage}>
          {country.name.common}
          <ArrowForwardIcon />
        </Button>
      </Td>
      <Td>{country.population}</Td>
      <Td>{country.region}</Td>
      <Td>
        <UnorderedList>
          {country.languages &&
            Object.values(country.languages).map(lang => {
              return <ListItem key={lang}>{lang}</ListItem>;
            })}
        </UnorderedList>
      </Td>
      <Td>
        {isVisible ? (
          <AddSuccess countryName={country.name.common} />
        ) : (
          <Button onClick={toggleFavoriteHandel}>
            <StarIcon color={isfavorite ? 'yellow.400' : ''} />
          </Button>
        )}
      </Td>
    </Tr>
  );
};

export default CountryT;
