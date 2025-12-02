export type Currency = 'USD' | 'EUR' | 'RUB'
export type OffersFilter = 'all' | 'active' | 'stopped'
export type PlatformFilter = 'all' | 'google' | 'vk' | 'telegram' | 'a-platform' | 'l-platform'

export interface FiltersState {
  date: string | null
  offers: OffersFilter
  currency: Currency
  platform: PlatformFilter
}
