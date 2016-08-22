import { receiveCities, receiveFlights } from '../actions'
import { REQUEST_CITIES, REQUEST_FLIGHTS } from '../actions'
import { fetchCities, fetchFlights } from '../util'

export default ({getState, dispatch}) => next => action => {
  const citiesSuccess = data => dispatch(receiveCities(data));
  const flightsSuccess = data => dispatch(receiveFlights(data));
  switch(action.type){
    case REQUEST_CITIES:
      fetchCities(citiesSuccess);
      break;
    case REQUEST_FLIGHTS:
      fetchFlights(action.cityId, flightsSuccess);
      break;
    default:
      return next(action);
  }
};
