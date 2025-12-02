type TrendDirection = 'up' | 'down'

interface Metric {
  id: 'spend' | 'clicks' | 'cpc' | 'cpa'
  title: string
  value: number
  suffix?: string
  trendDirection: TrendDirection
  trendValue: number
}

export interface MetricsState {
  items: Metric[]
}
