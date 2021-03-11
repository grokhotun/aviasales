import React from 'react'
import './TicketCard.scss'

const TicketCard = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__header">
        <div className="ticket-card__price">
          15500р.
        </div>
        <div className="ticket-card__logo">
          <img src={`http://pics.avs.io/99/36/S7.png`} alt="Лого авиакомпании" />
        </div>
      </div>
      <div className="ticket-card__body">
        <div className="ticket-card__row row-ticket-card">
          <div className="row-ticket-card__col">
            <div className="row-ticket-card__name">MOW - HKT</div>
            <div className="row-ticket-card__value">04:46 - 19:31</div>
          </div>
          <div className="row-ticket-card__col">
            <div className="row-ticket-card__name">В ПУТИ</div>
            <div className="row-ticket-card__value">14 ч. 45 м.</div>
          </div>
          <div className="row-ticket-card__col">
            <div className="row-ticket-card__name">
              1 пересадка
            </div>
            <div className="row-ticket-card__value">
              SVO, VKO
            </div>
          </div>
        </div>
        <div className="ticket-card__row row-ticket-card">
          <div className="row-ticket-card__col">
            <div className="row-ticket-card__name">MOW - HKT</div>
            <div className="row-ticket-card__value">04:46 - 19:31</div>
          </div>
          <div className="row-ticket-card__col">
            <div className="row-ticket-card__name">В ПУТИ</div>
            <div className="row-ticket-card__value">14 ч. 45 м.</div>
          </div>
          <div className="row-ticket-card__col">
            <div className="row-ticket-card__name">
              1 пересадка
            </div>
            <div className="row-ticket-card__value">
              SVO, VKO
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
