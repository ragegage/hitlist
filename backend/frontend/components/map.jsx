import React from 'react'

class Map extends React.Component {
  componentDidMount() {
    //set up map
    this.props.requestCities()
    this.setupMap()
  }

  render() {
    this.placeMarkers()
    return (
      <div id='map'></div>
    )
  }

  placeMarkers() {
    this.markers = this.markers || []
    this.markers.forEach(marker => marker.setMap(null))
    this.markers = []
    this.markers = this.props.cities.map(city => {
      const marker = new google.maps.Marker({
        position: {lat: city.lat, lng: city.lng},
        map: this.map,
        title: city.name
      })
      // location -> city.lat/lng
      // onhover -> city.name
      // onclick -> this.props.requestFlights(city.id)
      marker.addListener('click', this.props.requestFlights(city.id))
      return marker
    })
  }

  setupMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -0, lng: 0},
      zoom: 1
    })
  }
}

export default Map
