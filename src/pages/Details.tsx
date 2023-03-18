import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  Flex,
  Box,
  Text,
  Heading,
  CardBody,
  Image,
  CardFooter,
  Button,
  Avatar,
  SimpleGrid,
  useDisclosure
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { BiMap } from 'react-icons/bi';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleFavorite } from '../redux/country/countrySlice';
import { RootState } from '../app/store';
import AddSuccess from '../components/AddSuccess';

const Details: FC = () => {
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
  const showCountry = useAppSelector((state: RootState) => state.countryR.showCountry);
  const isfavorite = useAppSelector((state: RootState) =>
    showCountry ? state.countryR.favoriteCountries.includes(showCountry.name.common) : false
  );
  const dispatch = useAppDispatch();

  const toggleFavoriteHandel = () => {
    showCountry && dispatch(toggleFavorite(showCountry.name.common));
    if (!isfavorite) {
      onOpen();
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <Card w="clamp(300px, 80%, 80rem)" m="0 auto" p="2rem">
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar src={showCountry?.coatOfArms.png} />
          <Box>
            <Heading size="sm">
              {showCountry ? showCountry.name.official : 'Please select a country first !!'}
            </Heading>
            <Text>{showCountry?.capital}</Text>
          </Box>
        </Flex>
      </CardHeader>
      {showCountry && (
        <>
          <CardBody>
            <SimpleGrid columns={2} minChildWidth="120px" spacing="2rem">
              <Text>
                {`Official Name: ${showCountry?.name.official}, Region ${
                  showCountry?.region
                }, Subregion
          ${showCountry?.subregion}, Capital: ${showCountry?.capital && showCountry?.capital[0]},
          Population: ${showCountry?.population}, Official Languages:
          ${
            showCountry?.languages && Object.values(showCountry?.languages).map(lang => `${lang} `)
          }, Money:
          ${
            showCountry?.currencies && Object.values(showCountry?.currencies).map(curr => curr.name)
          },
          Area: ${showCountry?.area} square kilometers`}
              </Text>
              <Image objectFit="contain" src={showCountry?.flags.png} alt="flag" />
            </SimpleGrid>
          </CardBody>

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

            {isVisible ? (
              <AddSuccess countryName={showCountry.name.common} />
            ) : (
              <Button onClick={toggleFavoriteHandel}>
                <StarIcon color={isfavorite ? 'yellow.400' : ''} />
              </Button>
            )}
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default Details;
