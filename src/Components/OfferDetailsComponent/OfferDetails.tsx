import { useMemo, useState } from 'react'
import Icon from '../IconComponent/Icon'
import './offerDetails.scss'
import type { SortOrder } from '../../types/offerTableTypes'
import type {
  OfferDetailsProps,
  PlatformKey,
  PlatformRow,
  PlatformSortKey,
} from '../../types/offerDetailsTypes'

const PLATFORM_STATS: Record<PlatformKey, { accounts: number; avgCpc: number; avgCpa: number }> = {
  google: { accounts: 12, avgCpc: 0.32, avgCpa: 5.32 },
  vk: { accounts: 10, avgCpc: 0.11, avgCpa: 2.53 },
  'a-platform': { accounts: 7, avgCpc: 0.3, avgCpa: 4.5 },
  'l-platform': { accounts: 6, avgCpc: 0.28, avgCpa: 3.9 },
  telegram: { accounts: 5, avgCpc: 0.2, avgCpa: 3.2 },
}

const OfferDetails = ({ offer }: OfferDetailsProps) => {
  const [sortKey, setSortKey] = useState<PlatformSortKey>('platform')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const rows: PlatformRow[] = useMemo(() => {
    if (!offer) return []
    return offer.platforms.map((platform) => {
      const stats = PLATFORM_STATS[platform]
      return {
        platform,
        balance: offer.balance,
        accounts: stats.accounts,
        avgCpc: stats.avgCpc,
        avgCpa: stats.avgCpa,
      }
    })
  }, [offer])

  const sortedRows = useMemo(() => {
    const next = [...rows]
    next.sort((a, b) => {
      let aVal: string | number
      let bVal: string | number

      switch (sortKey) {
        case 'platform':
          aVal = a.platform
          bVal = b.platform
          break
        case 'balance':
          aVal = a.balance
          bVal = b.balance
          break
        case 'accounts':
          aVal = a.accounts
          bVal = b.accounts
          break
        case 'avgCpc':
          aVal = a.avgCpc
          bVal = b.avgCpc
          break
        case 'avgCpa':
          aVal = a.avgCpa
          bVal = b.avgCpa
          break
        default:
          aVal = 0
          bVal = 0
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
    return next
  }, [rows, sortKey, sortOrder])

  if (!offer) return null

  const toggleSort = (key: PlatformSortKey) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  const renderSortIcon = (key: PlatformSortKey) => (
    <span className={`sort-icon ${sortKey === key ? `sort-icon--${sortOrder}` : ''}`}>
      <Icon name="sort-vertical" size={14} />
    </span>
  )

  return (
    <div className="offer-details">
      <div className="offer-details__card offer-details__card--left">
        <h3 className="offer-details__title">Баланс</h3>
        <div className="offer-details__balance">
          ${offer.balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
        </div>

        <dl className="offer-details__list">
          <div className="offer-details__row">
            <dt>Дата запуска:</dt>
            <dd>{new Date(offer.launchDate).toLocaleDateString('ru-RU')}</dd>
          </div>
          <div className="offer-details__row">
            <dt>Направление:</dt>
            <dd>E-Commerce</dd>
          </div>
          <div className="offer-details__row">
            <dt>Объект:</dt>
            <dd>App</dd>
          </div>
          <div className="offer-details__row">
            <dt>Цель:</dt>
            <dd>CPA</dd>
          </div>
          <div className="offer-details__row">
            <dt>Трекер:</dt>
            <dd>AppsFlyer</dd>
          </div>
          <div className="offer-details__row">
            <dt>Гео:</dt>
            <dd>RU, UA, KZ</dd>
          </div>
        </dl>
      </div>

      <div className="offer-details__card">
        <h3 className="offer-details__title">Рекламные площадки</h3>

        <table className="platforms-table">
          <thead>
            <tr>
              <th className="offers-table__checkbox-cell" />
              <th onClick={() => toggleSort('platform')}>
                <span className="offers-table__th-content">
                  Площадки {renderSortIcon('platform')}
                </span>
              </th>
              <th onClick={() => toggleSort('balance')}>
                <span className="offers-table__th-content">Баланс {renderSortIcon('balance')}</span>
              </th>
              <th onClick={() => toggleSort('accounts')}>
                <span className="offers-table__th-content">
                  Аккаунтов {renderSortIcon('accounts')}
                </span>
              </th>
              <th onClick={() => toggleSort('avgCpc')}>
                <span className="offers-table__th-content">AVG CPC {renderSortIcon('avgCpc')}</span>
              </th>
              <th onClick={() => toggleSort('avgCpa')}>
                <span className="offers-table__th-content">AVG CPA {renderSortIcon('avgCpa')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => (
              <tr key={row.platform + index}>
                <td className="offers-table__checkbox-cell">
                  <input type="checkbox" />
                </td>
                <td>
                  <Icon name={row.platform} size={34} />
                </td>
                <td>${row.balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</td>
                <td>{row.accounts}</td>
                <td>{`$${row.avgCpc.toFixed(2)}`}</td>
                <td>{`$${row.avgCpa.toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OfferDetails
