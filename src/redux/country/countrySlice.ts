import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import countryAPI from '../../api/countryAPI';
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
      state.selectedPage = action.payload-1;
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.countries.value)`

export default countrySlice.reducer;
