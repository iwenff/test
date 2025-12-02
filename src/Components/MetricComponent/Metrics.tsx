import './metric.scss'
import Icon from '../IconComponent/Icon'
import { useAppSelector } from '../../store/hooks'
import type { IconName } from '../IconComponent/IconsTemplate'
import { selectMetrics } from '../../store/MetricSlice/metricsSlice'

const metricIconById: Record<string, IconName> = {
  spend: 'dollar',
  clicks: 'clicks',
  cpc: 'cpc',
  cpa: 'cpa',
}

const Metrics = () => {
  const metrics = useAppSelector(selectMetrics)
  return (
    <section className="dashboard__metrics">
      {metrics.map((m) => (
        <article key={m.id} className="metric-card">
          <div className="metric-card__header">
            <span className="metric-card__title">{m.title}</span>
            <Icon name={metricIconById[m.id] ?? 'dollar'} size={20} className="metric-card__icon" />
          </div>

          <div className="metric-card__value">
            {m.suffix
              ? `${m.value}${m.suffix}`
              : m.id === 'spend'
                ? `$${m.value.toLocaleString('ru-RU')}`
                : m.value}
          </div>

          <div className="metric-card__footer">
            <span className={`metric-card__trend metric-card__trend--${m.trendDirection}`}>
              <Icon name={`trend-${m.trendDirection}` as 'trend-up' | 'trend-down'} size={14} />
              {m.trendValue}%
            </span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Metrics
