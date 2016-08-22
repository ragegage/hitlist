import { connect } from 'react-redux'
import Map from './map'
import { requestCities, requestFlights } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  cities: state.cities
})

const mapDispatchToProps = (dispatch) => ({
  requestCities: () => dispatch(requestCities()),
  requestFlights: cityId => () => dispatch(requestFlights(cityId))
  // needs way to query flights for a given city
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)
