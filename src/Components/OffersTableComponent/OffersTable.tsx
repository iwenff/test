import React, { useEffect, useMemo, useState, type MouseEvent } from 'react'
import './offersTable.scss'
import Icon from '../IconComponent/Icon'
import { formatDate, formatMoney } from './utils/formatedData'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { selectOffers, setActiveOffer } from '../../store/OffersSlice/offersSlice'
import type { Offer, OffersTableProps, SortKey, SortOrder } from '../../types/offerTableTypes'
import { renderPlatforms, renderStatus } from './utils/renderers'

const OffersTable: React.FC<OffersTableProps> = ({ onOfferSelect }) => {
  const offers = useAppSelector(selectOffers)
  const dispatch = useAppDispatch()

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [activeOfferId, setActiveOfferId] = useState<string>('')

  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  useEffect(() => {
    if (offers.length > 0) {
      setSelectedIds(new Set(offers.map((o) => o.id)))
      setActiveOfferId(offers[0].id)
    } else {
      setSelectedIds(new Set())
      setActiveOfferId('')
    }
  }, [offers])

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  const sortedOffers = useMemo(() => {
    const next = [...offers]

    next.sort((a, b) => {
      let aVal: string | number = ''
      let bVal: string | number = ''

      switch (sortKey) {
        case 'name':
          aVal = a.name
          bVal = b.name
          break
        case 'launchDate':
          aVal = new Date(a.launchDate).getTime()
          bVal = new Date(b.launchDate).getTime()
          break
        case 'balance':
          aVal = a.balance
          bVal = b.balance
          break
        case 'spend':
          aVal = a.spend
          bVal = b.spend
          break
        case 'status':
          aVal = a.status
          bVal = b.status
          break
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

    return next
  }, [offers, sortKey, sortOrder])

  const allSelected = selectedIds.size === offers.length
  const someSelected = selectedIds.size > 0 && !allSelected

  const handleHeaderCheckboxChange = () => {
    if (allSelected) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(offers.map((o) => o.id)))
    }
  }

  const handleRowCheckboxChange = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleRowClick = (offer: Offer, e: MouseEvent<HTMLTableRowElement>) => {
    const target = e.target as HTMLElement

    if (
      target.closest('input') ||
      target.closest('.offers-table__menu-cell') ||
      target.closest('.offer-name__toggle')
    ) {
      return
    }

    setActiveOfferId(offer.id)
    dispatch(setActiveOffer(offer.id))
    onOfferSelect?.(offer)
  }

  const renderSortIcon = (key: SortKey) => (
    <span className={`sort-icon ${sortKey === key ? `sort-icon--${sortOrder}` : ''}`}>
      <Icon name="sort-vertical" size={14} />
    </span>
  )

  return (
    <div className="offers-table-wrapper">
      <table className="offers-table">
        <thead>
          <tr>
            <th className="offers-table__checkbox-cell">
              <input
                type="checkbox"
                checked={allSelected}
                ref={(el) => {
                  if (el) {
                    el.indeterminate = someSelected
                  }
                }}
                onChange={handleHeaderCheckboxChange}
              />
            </th>
            <th onClick={() => toggleSort('name')}>
              <span className="offers-table__th-content">
                Название оффера {renderSortIcon('name')}
              </span>
            </th>
            <th>
              <span className="offers-table__th-content">Площадки</span>
            </th>
            <th onClick={() => toggleSort('launchDate')}>
              <span className="offers-table__th-content">
                Дата запуска {renderSortIcon('launchDate')}
              </span>
            </th>
            <th onClick={() => toggleSort('balance')}>
              <span className="offers-table__th-content">Баланс {renderSortIcon('balance')}</span>
            </th>
            <th onClick={() => toggleSort('spend')}>
              <span className="offers-table__th-content">Расход {renderSortIcon('spend')}</span>
            </th>
            <th onClick={() => toggleSort('status')}>
              <span className="offers-table__th-content">Статус {renderSortIcon('status')}</span>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {sortedOffers.map((offer) => {
            const isActive = offer.id === activeOfferId
            const isChecked = selectedIds.has(offer.id)

            return (
              <tr
                key={offer.id}
                className={`offers-table__row ${isActive ? 'offers-table__row--active' : ''}`}
                onClick={(e) => handleRowClick(offer, e)}
              >
                <td className="offers-table__checkbox-cell">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleRowCheckboxChange(offer.id)}
                  />
                </td>
                <td>
                  <div className="offer-name">
                    <button className="offer-name__toggle" type="button">
                      <Icon name="arrow-down" size={14} />
                    </button>
                    <span>{offer.name}</span>
                  </div>
                </td>
                <td>{renderPlatforms(offer.platforms)}</td>
                <td>{formatDate(offer.launchDate)}</td>
                <td>{formatMoney(offer.balance)}</td>
                <td>{formatMoney(offer.spend)}</td>
                <td>{renderStatus(offer.status)}</td>
                <td className="offers-table__menu-cell">
                  <Icon name="more" size={18} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OffersTable
