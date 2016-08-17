import { connect } from 'react-redux'
import FlightList from './flight_list'

const mapStateToProps = (state, ownProps) => ({
  // needs list of flights
})

const mapDispatchToProps = (dispatch) => ({
  //
})

export default connect(mapStateToProps,mapDispatchToProps)(FlightList)
