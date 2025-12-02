import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { MOCK_OFFERS } from '../../MOCKS/offers'
import type { OffersState } from './OfferSliceTypes'

const initialState: OffersState = {
  items: MOCK_OFFERS,
  activeOfferId: MOCK_OFFERS[0]?.id ?? null,
}

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    initOffers(state) {
      state.items = MOCK_OFFERS
      state.activeOfferId = MOCK_OFFERS[0]?.id ?? null
    },
    setActiveOffer(state, action: PayloadAction<string>) {
      state.activeOfferId = action.payload
    },
  },
})

export const { initOffers, setActiveOffer } = offersSlice.actions

export const selectOffers = (state: { offers: OffersState }) => state.offers.items
export const selectActiveOfferId = (state: { offers: OffersState }) => state.offers.activeOfferId
export const selectActiveOffer = (state: { offers: OffersState }) =>
  state.offers.items.find((o) => o.id === state.offers.activeOfferId) ?? null

export default offersSlice.reducer
