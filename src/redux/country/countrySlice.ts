import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import countryAPI from '../../api/countryAPI';
import { ICountry } from '../../interfaces/country';

export const fetchCountryByName = createAsyncThunk(
  'posts/fetchByIdStatus',
  async (countryName: string, thunkAPI) => {
    const [response] = await countryAPI.fetchByName(countryName);
    return response;
  }
);

export const fetchAll = createAsyncThunk('posts/fetchAllStatus', async thunkAPI => {
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
  loading: boolean;
  fetchError: boolean;
}
const initialState: IState = {
  countries: [],
  favoriteCountries: ['Hungary'],
  sortCountriesName: { isApplyed: false, order: 1 },
  sortCountriesPopulation: { isApplyed: false, order: 1 },
  searchQuery: '',
  showCountry: null,
  loading: false,
  fetchError: false
};
const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
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
      state.loading = false;
      state.fetchError = false;
      state.showCountry = action.payload;
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.loading = false;
      state.fetchError = false;
      state.countries = action.payload;
    });

    builder.addCase(fetchAll.pending || fetchCountryByName.pending, (state, action) => {
      state.loading = true;
      state.fetchError = false;
    });
    builder.addCase(fetchAll.rejected || fetchCountryByName.rejected, (state, action) => {
      state.loading = false;
      state.fetchError = true;
    });
  }
});

export const { setSearchQuery, toggleFavorite, toggleSortIsApplyed, toggleSortOrder } =
  countrySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.countries.value)`

export default countrySlice.reducer;
