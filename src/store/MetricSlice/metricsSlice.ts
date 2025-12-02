import { createSlice } from '@reduxjs/toolkit'
import type { MetricsState } from './MetricSliceTypes'

const initialState: MetricsState = {
  items: [
    {
      id: 'spend',
      title: 'Расходы',
      value: 15423,
      suffix: ',00',
      trendDirection: 'up',
      trendValue: 24,
    },
    { id: 'clicks', title: 'Клики', value: 323, trendDirection: 'up', trendValue: 100 },
    { id: 'cpc', title: 'CPC', value: 4, trendDirection: 'down', trendValue: 2 },
    { id: 'cpa', title: 'CPA', value: 4.44, suffix: '$', trendDirection: 'up', trendValue: 3 },
  ],
}

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
})

export const selectMetrics = (state: { metrics: MetricsState }) => state.metrics.items

export default metricsSlice.reducer
