import { connect } from 'react-redux'
import Map from './map'

const mapStateToProps = (state, ownProps) => ({
  // needs list of cities
})

const mapDispatchToProps = (dispatch) => ({
  // needs way to update cities displayed
})

export default connect(mapStateToProps,mapDispatchToProps)(Map)
