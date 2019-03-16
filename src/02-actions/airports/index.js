import * as types from '../../05-constants/airports';

export const loadAirports = () => dispatch => {
  fetch('https://next.json-generator.com/api/json/get/NyXsRW8PU').then(res => res.json()).then(res => {
    dispatch(loadAirportsAction(formatAirportsToTable(res)));
  })
}

const loadAirportsAction = (airports) => {
  return {
    type: types.LOAD_AIRPORTS,
    airports
  }
}

const formatAirportsToTable = (airports) => {
  return airports.map(airport => {
    return {
      ...airport,
      geolocation: `${airport.lat},  ${airport.lon}`
    }
  })
}
