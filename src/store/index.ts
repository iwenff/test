import { configureStore } from '@reduxjs/toolkit'
import offersReducer from './OffersSlice/offersSlice'
import filtersReducer from './FilterSlice/filtersSlice'
import metricsReducer from './MetricSlice/metricsSlice'

export const store = configureStore({
  reducer: {
    offers: offersReducer,
    filters: filtersReducer,
    metrics: metricsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
