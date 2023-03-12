import React, { useEffect } from 'react';
import Countries from './pages/Countries';
import { useAppDispatch } from './app/hooks';
import { fetchAll } from './redux/country/countrySlice';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './pages/shared/Navbar';
import Footer from './pages/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/favorite" element={<Countries showFavorite />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
