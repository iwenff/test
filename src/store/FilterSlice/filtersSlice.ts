import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Currency, FiltersState, OffersFilter, PlatformFilter } from './FilterSliceTypes'

const initialState: FiltersState = {
  date: null,
  offers: 'all',
  currency: 'USD',
  platform: 'all',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string | null>) {
      state.date = action.payload
    },
    setOffersFilter(state, action: PayloadAction<OffersFilter>) {
      state.offers = action.payload
    },
    setCurrency(state, action: PayloadAction<Currency>) {
      state.currency = action.payload
    },
    setPlatform(state, action: PayloadAction<PlatformFilter>) {
      state.platform = action.payload
    },
  },
})

export const { setDate, setOffersFilter, setCurrency, setPlatform } = filtersSlice.actions
export const selectFilters = (state: { filters: FiltersState }) => state.filters

export default filtersSlice.reducer
