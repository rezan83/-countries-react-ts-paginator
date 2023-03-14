import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchAll } from './redux/country/countrySlice';
import Countries from './pages/Countries';
import Navbar from './pages/shared/Navbar';
import Footer from './pages/shared/Footer';
import Hero from './pages/Hero';
import Details from './pages/Details';
import Loading from './pages/shared/Loading';
import theme from './theme';

function App() {
  
  const isFetchError = useAppSelector(state => state.countryR.isFetchError);
  const isLoading = useAppSelector(state => state.countryR.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/countries" element={
           <>
           {isFetchError && <Loading loadingType="error" />}
           {isLoading && <Loading loadingType="loading" />}
           {!isLoading && <Countries />}
         </>
          
          
          } />
          <Route
            path="/favorite"
            element={
              <>
                {isFetchError && <Loading loadingType="error" />}
                {isLoading && <Loading loadingType="loading" />}
                {!isLoading && <Countries showFavorite />}
              </>
            }
          />
          <Route
            path="/details"
            element={
              <>
                {isFetchError && <Loading loadingType="error" />}
                {isLoading && <Loading loadingType="loading" />}
                {!isLoading && <Details />}
              </>
            }
          />
          <Route path="*" element={<Hero notFound />} />
        </Routes>

        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
