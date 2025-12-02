import React from 'react'
import './offers.scss'

const OffersPage: React.FC = () => {
  return (
    <section className="dashboard__offers">
      <div className="dashboard__offers-header">
        <h2>Офферы</h2>
        <button className="ghost-button">
          Экспорт
          <span className="ghost-button__icon">▾</span>
        </button>
      </div>
    </section>
  )
}

export default OffersPage
