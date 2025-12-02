import type { Offer } from '../types/offerTableTypes'

export const MOCK_OFFERS: Offer[] = [
  {
    id: '1',
    name: 'Продажа мебели',
    platforms: ['google', 'l-platform', 'a-platform'],
    launchDate: '2025-06-23',
    balance: 15423,
    spend: 15423,
    status: 'active',
  },
  {
    id: '2',
    name: 'Стулья 2.0',
    platforms: ['vk', 'telegram'],
    launchDate: '2025-06-23',
    balance: 15423,
    spend: 15423,
    status: 'stopped',
  },
]
