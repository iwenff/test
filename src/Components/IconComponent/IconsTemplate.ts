export type IconName =
  | 'arrow-down'
  | 'sort-vertical'
  | 'google'
  | 'vk'
  | 'telegram'
  | 'a-platform'
  | 'l-platform'
  | 'trend-up'
  | 'trend-down'
  | 'clicks'
  | 'cpc'
  | 'cpa'
  | 'dollar'
  | 'more'
  | 'social'
  | 'calendar'
  | 'offers'
  | 'finance'

export const iconPathByName: Record<IconName, string> = {
  'arrow-down': '/icons/arrowBottom.svg',
  'sort-vertical': '/icons/chevron-selector-vertical.svg',

  google: '/icons/google.svg',
  vk: '/icons/vk.svg',
  telegram: '/icons/tg.svg',
  'a-platform': '/icons/a.svg',
  'l-platform': '/icons/l.svg',

  'trend-up': '/icons/trend-up-01.svg',
  'trend-down': '/icons/trend-down-01.svg',

  clicks: '/icons/clicks.svg',
  cpc: '/icons/CPC.svg',
  cpa: '/icons/CPA.svg',
  dollar: '/icons/dollar.svg',
  more: '/icons/more.svg',

  social: '/icons/Social.svg',
  calendar: '/icons/calendar.svg',
  offers: '/icons/offers.svg',
  finance: '/icons/finance.svg',
}
