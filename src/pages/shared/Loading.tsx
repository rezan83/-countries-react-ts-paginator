import React, { FC } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Spinner } from '@chakra-ui/react';

interface ILoadingProps {
  loadingType: string;
}
const Loading: FC<ILoadingProps> = ({ loadingType }) => {
  return (
    <div className="loading">
      {loadingType === 'loading' && (
        <Spinner thickness="5px" speed="0.65s" emptyColor="red.500" color="blue.500" size="xl" />
      )}
      {loadingType === 'error' && (
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px">
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Error hapened while fetching server
          </AlertTitle>
          <AlertDescription maxWidth="sm">Please try again later.</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Loading;
