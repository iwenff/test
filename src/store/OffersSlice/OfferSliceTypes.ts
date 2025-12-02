import type { Offer } from '../../types/offerTableTypes'

export interface OffersState {
  items: Offer[]
  activeOfferId: string | null
}
