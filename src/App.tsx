import './App.css'
import Icon from './Components/IconComponent/Icon'
import Metrics from './Components/MetricComponent/Metrics'
import OfferDetails from './Components/OfferDetailsComponent/OfferDetails'
import OffersTable from './Components/OffersTableComponent/OffersTable'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { initOffers } from './store/OffersSlice/offersSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initOffers())
  }, [dispatch])

  const offers = useAppSelector((state) => state.offers.items)
  const activeOfferId = useAppSelector((state) => state.offers.activeOfferId)
  const activeOffer = offers.find((o) => o.id === activeOfferId) || null

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Офферы</h1>
        <button className="ghost-button">Экспорт</button>
      </header>

      <section className="dashboard__filters">
        <button className="filter">
          <Icon name="calendar" size={18} />
          <span>Выберите дату</span>

          <Icon name="arrow-down" size={24} />
        </button>
        <button className="filter">
          <Icon name="offers" size={18} />
          <span>Все офферы</span>

          <Icon name="arrow-down" size={24} />
        </button>
        <button className="filter">
          <Icon name="finance" size={18} />
          <span>USD</span>
          <Icon name="arrow-down" size={24} />
        </button>
        <button className="filter">
          <Icon name="social" size={18} />
          <span>Все площадки</span>
          <Icon name="arrow-down" size={24} />
        </button>
        <button className="filter filter--right">
          <span>Экспорт</span>
          <Icon name="arrow-down" size={24} />
        </button>
      </section>

      <Metrics />

      <OffersTable />

      <OfferDetails offer={activeOffer} />
    </div>
  )
}

export default App
