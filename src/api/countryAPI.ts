import axios from 'axios';

const countryAPI = {
  // allCountriesURL: 'https://restcountries.com/v3.1/all',
  allCountriesURL: 'https://flask-countries-api.vercel.app',

  // oneCountryURL: 'https://restcountries.com/v3.1/name/',
  oneCountryURL: 'https://flask-countries-api.vercel.app/name/',

  async fetchAll() {
    return await axios
      .get(this.allCountriesURL)
      .then(res => res.data)
      .catch(error => error);
  },
  async fetchByName(countryName: string) {
    return await axios
      .get(this.oneCountryURL + countryName)
      .then(res => res.data)
      .catch(error => error);
  }
};

export default countryAPI;
