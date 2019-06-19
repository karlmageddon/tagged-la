import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

import Description from './Description'
import TagMarkers from './TagMarkers'
import apiConfig from './apiKeys'

class CityMap extends React.Component {
  constructor(props){
    super(props)
    this.state = { tags: [], previousLatLng:{}, activeMarker: null }
  }

  async getGrafitti() {
    await fetch('/api/tags')
      .then(res => res.json())
      .then(data => this.setState({ tags: data.tags }))
  }

  handleMarkerClick = async (latlng, id) => {
    await this.setState({activeMarker: null})
    await this.setState({ previousLatLng: this.map.getCenter(), activeMarker: id });
    const modifiedLatLng = await { lat: latlng.lat + 0.095, lng: latlng.lng - 0.08 }
    await this.map.panTo(modifiedLatLng);
  }

  handlePopupClose = async () => {
    await this.map.panTo(this.state.previousLatLng)
    await this.setState({ activeMarker: null })
  }

  async componentDidMount() {
    this.map = this.refs.map.leafletElement
    await this.getGrafitti()
  }

  render() {
    const position = [34.072014, -118.384078]
    const mapboxUrl = `https://api.mapbox.com/styles/v1/karlmageddon/cjwu2w0g18zrj1cli1u0ma172/tiles/512/{z}/{x}/{y}?access_token=${process.env.MAPBOX_API_KEY}`

    return (
      <div>
      <Description id={this.state.activeMarker} tags={this.state.tags}/>
        <Map center={position} zoom={12} minZoom={12} maxZoom={12} zoomControl={false} doubleClickZoom={false} ref="map" onPopupClose={this.handlePopupClose}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={mapboxUrl}
          />
          <TagMarkers tags={this.state.tags} handleMarkerClick={this.handleMarkerClick} activeMarker={this.state.activeMarker} />
        </Map>
      </div>
    )
  }
}

export default CityMap
