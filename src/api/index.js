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
      return {
        ...error
      }
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
    if (!this.searchId) {
      await this.getSearchId()
    }
    const {tickets, stop} = await this.fetch(`/tickets?searchId=${this.searchId}`)
    if (stop) {
      this.searchId = null
    }
    return tickets.map(ticket => ({
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
}

const calcDuration = time => {
  const timestamp = time * 60
  const hours = Math.floor(timestamp / 60 / 60)
  const minutes = Math.floor(timestamp / 60) - hours * 60
  return `${hours} ч. ${minutes} м.`
}

const calcTime = (departureTime, duration) => {
  const originTime = new Date(departureTime)
  const destinationTime = new Date()
  const departureTimeInMs = originTime.getTime()
  const arrivialTimeInMs = departureTimeInMs + duration * 60000
  destinationTime.setTime(arrivialTimeInMs)
  const fromTime = `${originTime.getHours() < 10 ? '0' : ''}${originTime.getHours()}:${
    originTime.getMinutes() < 10 ? '0' : ''
  }${originTime.getMinutes()}`
  const toTime = `${destinationTime.getHours() < 10 ? '0' : ''}${destinationTime.getHours()}:${
    destinationTime.getMinutes() < 10 ? '0' : ''
  }${destinationTime.getMinutes()}`
  return `${fromTime} - ${toTime}`
}

export const $api = new AviasalesAPI()
