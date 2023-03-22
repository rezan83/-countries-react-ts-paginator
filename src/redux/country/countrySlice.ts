import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { rejectWithValue } from 'axios';
import countryAPI from '../../api/countryAPI';
import { RootState } from '../../app/store';
import { ICountry } from '../../interfaces/country';

export const fetchCountryByName = createAsyncThunk(
  'countries/fetchByNameStatus',
  async (countryName: string) => {
    // because this is only for details page not for search
    const [response] = await countryAPI.fetchByName(countryName);
    return response;
  }
);

export const fetchAll = createAsyncThunk<ICountry[]>('countries/fetchAllStatus', async () => {
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
  errorMessage: string;
  // selectedPage: number;
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
  errorMessage: ''
  // selectedPage: 0
};
const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    // setSelectedPage: (state, action) => {
    //   state.selectedPage = action.payload;
    // },
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
    builder.addCase(fetchAll.pending, state => {
      state.isLoading = true;
      state.isFetchError = false;
    });
    builder.addCase(fetchCountryByName.pending, state => {
      state.isLoading = true;
      state.isFetchError = false;
    });
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
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.isLoading = false;
      state.isFetchError = true;
      state.errorMessage = action.error.message || 'Something wrong happend';
    });
    builder.addCase(fetchCountryByName.rejected, (state, action) => {
      state.isLoading = false;
      state.isFetchError = true;
      state.errorMessage = action.error.message || 'Something wrong happend';
    });
  }
});

export const { setSearchQuery, toggleFavorite, toggleSortIsApplyed, toggleSortOrder } =
  countrySlice.actions;

// all side effect of sort, filter, favorite and search
export const countriesState =
  (showFavorite: boolean = false) =>
  ({ countryR }: RootState) => {
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

    return countries;
  };

export default countrySlice.reducer;
