import type { Offer } from './offerTableTypes'

export type PlatformKey = Offer['platforms'][number]

export type PlatformSortKey = 'platform' | 'balance' | 'accounts' | 'avgCpc' | 'avgCpa'
export type SortOrder = 'asc' | 'desc'

export interface PlatformRow {
  platform: PlatformKey
  balance: number
  accounts: number
  avgCpc: number
  avgCpa: number
}
export interface OfferDetailsProps {
  offer: Offer | null
}
