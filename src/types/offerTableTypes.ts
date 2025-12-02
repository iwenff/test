export interface Offer {
  id: string
  name: string
  platforms: Platform[]
  launchDate: string
  balance: number
  spend: number
  status: OfferStatus
}
export type Platform = 'google' | 'a-platform' | 'vk' | 'l-platform' | 'telegram'
export type OfferStatus = 'active' | 'stopped'

export type SortKey = 'name' | 'launchDate' | 'balance' | 'spend' | 'status'
export type SortOrder = 'asc' | 'desc'

export interface OffersTableProps {
  onOfferSelect?: (offer: Offer) => void
}
