import React, { FC } from 'react';
import { Alert, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';

interface IAddSuccessProps {
  countryName: string;
}
const AddSuccess: FC<IAddSuccessProps> = ({ countryName }) => {
  return (
    <>
      <Alert status="success" position="absolute" right="0" bg="green.400">
        <AlertIcon />
        <Box>
          <AlertTitle>Success! {countryName} added to favorites</AlertTitle>
        </Box>
      </Alert>
    </>
  );
};

export default AddSuccess;
