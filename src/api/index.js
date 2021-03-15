import {calcDuration, calcTime} from '@/utils'
class AviasalesAPI {
  constructor() {
    this._api = 'https://front-test.beta.aviasales.ru'
    this.searchId = null
  }

  /**
   * Обертка над нативном fetch для удобного выполнения запросов
   * @param {string} url URL запроса
   */
  async fetch(url = '') {
    try {
      const response = await fetch(`${this._api}${url}`)
      const data = await response.json()
      return {
        ...data
      }
    } catch (error) {
      return error
    }
  }

  /**
   * Метод для получения поискового ID
   * @return {bool} Возвращает true/false при успешном/неуспешном запросе
   */
  async getSearchId() {
    try {
      const {searchId} = await this.fetch('/search')
      this.searchId = searchId
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * Метод для получения билетов
   * @return {object}  Возвращает массив билетов
   */
  async getData() {
    try {
      if (!this.searchId) {
        await this.getSearchId()
      }
      const {tickets, stop} = await this.fetch(`/tickets?searchId=${this.searchId}`)
      if (stop) {
        this.searchId = null
      }
      return {
        end: stop,
        tickets: tickets.map(ticket => ({
          carrier: ticket.carrier,
          price: ticket.price,
          totalDuration: ticket.segments[0].duration + ticket.segments[1].duration,
          totalTransitions: ticket.segments[0].stops.length + ticket.segments[1].stops.length,
          to: {
            timeInterval: calcTime(ticket.segments[0].date, ticket.segments[0].duration),
            duration: calcDuration(ticket.segments[0].duration),
            stops: ticket.segments[0].stops,
            direction: `${ticket.segments[0].origin} - ${ticket.segments[0].destination}`
          },
          from: {
            timeInterval: calcTime(ticket.segments[1].date, ticket.segments[1].duration),
            duration: calcDuration(ticket.segments[1].duration),
            stops: ticket.segments[1].stops,
            direction: `${ticket.segments[1].destination} - ${ticket.segments[1].origin}`
          }
        }))
      }
    } catch (error) {
      return error
    }
  }
}

export const $api = new AviasalesAPI()
