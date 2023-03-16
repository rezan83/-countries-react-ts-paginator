import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import countryAPI from '../../api/countryAPI';
import { RootState } from '../../app/store';
import { ICountry } from '../../interfaces/country';

export const fetchCountryByName = createAsyncThunk(
  'countries/fetchByIdStatus',
  async (countryName: string, thunkAPI) => {
    const [response] = await countryAPI.fetchByName(countryName);
    return response;
  }
);

export const fetchAll = createAsyncThunk('countries/fetchAllStatus', async thunkAPI => {
  const response = await countryAPI.fetchAll();
  return response;
});
interface ISort {
  isApplyed: boolean;
  order: number;
}
interface IState {
  countries: ICountry[];
  favoriteCountries: string[];
  searchQuery: string;
  sortCountriesName: ISort;
  sortCountriesPopulation: ISort;
  showCountry: ICountry | null;
  isLoading: boolean;
  isFetchError: boolean;
  selectedPage: number;
}
const initialState: IState = {
  countries: [],
  favoriteCountries: ['Egypt'],
  sortCountriesName: { isApplyed: false, order: 1 },
  sortCountriesPopulation: { isApplyed: false, order: 1 },
  searchQuery: '',
  showCountry: null,
  isLoading: true,
  isFetchError: false,
  selectedPage: 0
};
const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleSortIsApplyed: (state, action) => {
      switch (action.payload) {
        case 'name':
          state.sortCountriesName.isApplyed = !state.sortCountriesName.isApplyed;
          break;
        case 'population':
          state.sortCountriesPopulation.isApplyed = !state.sortCountriesPopulation.isApplyed;
          break;
        default:
          break;
      }
    },
    toggleSortOrder: (state, action) => {
      switch (action.payload) {
        case 'name':
          state.sortCountriesName.order = -state.sortCountriesName.order;
          break;
        case 'population':
          state.sortCountriesPopulation.order = -state.sortCountriesPopulation.order;
          break;
        default:
          break;
      }
    },
    toggleFavorite: (state, action) => {
      if (state.favoriteCountries.includes(action.payload)) {
        state.favoriteCountries = state.favoriteCountries.filter(name => name !== action.payload);
      } else {
        state.favoriteCountries.push(action.payload);
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCountryByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isFetchError = false;
      state.showCountry = action.payload;
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isFetchError = false;
      state.countries = action.payload;
    });

    builder.addCase(fetchAll.pending, (state, action) => {
      state.isLoading = true;
      state.isFetchError = false;
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.isLoading = false;
      state.isFetchError = true;
    });
    builder.addCase(fetchCountryByName.pending, (state, action) => {
      state.isLoading = true;
      state.isFetchError = false;
    });
    builder.addCase(fetchCountryByName.rejected, (state, action) => {
      state.isLoading = false;
      state.isFetchError = true;
    });
  }
});

export const {
  setSearchQuery,
  toggleFavorite,
  toggleSortIsApplyed,
  toggleSortOrder,
  setSelectedPage
} = countrySlice.actions;

export const pageState = (countPerPage:number = 10, showFavorite:boolean = false)=>({countryR}: RootState) => {
  let countries = [...countryR.countries];
  if (countryR.sortCountriesName.isApplyed) {
    countries.sort((country1, country2) => {
      if (country1.name.common > country2.name.common) {
        return countryR.sortCountriesName.order;
      }
      if (country1.name.common < country2.name.common) {
        return -countryR.sortCountriesName.order;
      }
      return 0;
    });
  }
  if (countryR.sortCountriesPopulation.isApplyed) {
    countries.sort(
      (country1, country2) =>
      countryR.sortCountriesPopulation.order * (country1.population - country2.population)
    );
  }
  if (showFavorite) {
    countries = countries.filter(country => {
      return countryR.favoriteCountries.includes(country.name.common);
    });
  }
  if (countryR.searchQuery) {
    countries = countries.filter(country => {
      return country.name.common.toLowerCase().includes(countryR.searchQuery);
    });
  }

  const pages = Math.ceil(countries.length / countPerPage);

  let pageArray: ICountry[][] = [];
  for (let index = 0; index < pages; index++) {
    pageArray.push(countries.slice(0 + countPerPage * index, countPerPage + countPerPage * index));
  }
  return { pageArray, pages };
}

export default countrySlice.reducer;
