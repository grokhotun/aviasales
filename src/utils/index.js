import {orderBy} from 'lodash'

/**
 * Функция сортирует массив билетов в зависимости от нужного типа сортировки
 * @param {array} items Массив билетов
 * @param {string} type Строка типа сортировки
 * @return {array} Отсортированный массив билетов
 */
export const sortBy =(items, type) => {
  if (type === 'fast') {
    return orderBy(items, 'totalDuration', 'asc')
  } else if (type === 'cheap') {
    return orderBy(items, 'price', 'asc')
  } else {
    return items
  }
}

/**
 * Функция сортирует билеты по заданным фильтрам
 * @param {array} tickets Массив билетов
 * @param {object} transitions Объект фильтра
 * @return {array} Возвращает массив
 */
export const filterByTransitions = (tickets, transitions) => {
  return tickets.filter((ticket) =>
    transitions.all ||
      transitions.straight && ticket.totalTransitions === 0 ||
      transitions.oneTransition && ticket.totalTransitions === 1 ||
      transitions.twoTransition && ticket.totalTransitions === 2 ||
      transitions.threeTransition && ticket.totalTransitions === 3
  )
}

/**
 * Функция форматирует время в timesstamp секундах в формат часы/минуты
 * @param {number} time Время в формате UNIX timestamp
 * @return {string} Возвращает строку
 */
export const calcDuration = time => {
  const timestamp = time * 60
  const hours = Math.floor(timestamp / 60 / 60)
  const minutes = Math.floor(timestamp / 60) - hours * 60
  return `${hours} ч. ${minutes} м.`
}

/**
 * Функция высчитывает интервал полета на основании времени вылета и длительности
 * @param {number} departureTime Время вылета в формате UNIX timestamp
 * @param {*} duration Длительность полета в формате UNIX timestamp
 * @return {string} Возвращает строку
 */
export const calcTime = (departureTime, duration) => {
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
