import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import InstagramEmbed from 'react-instagram-embed'
import L from 'leaflet'

class TagMarkers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const activeMarker = this.props.activeMarker
    const ExtraMarkers = require('leaflet-extra-markers').default
    const redMarker = L.ExtraMarkers.icon({
      icon: 'fa-spray-can',
      markerColor: 'red',
      shape: 'circle',
      prefix: 'fa'
    });

    const tagMarkers = this.props.tags.map((tag) =>
      <Marker
        key={tag.id}
        title={tag.name}
        position={[tag.latitude, tag.longitude]}
        icon={redMarker}
        opacity={activeMarker && activeMarker !== tag.id ? 0 : 1.0 }
        className={activeMarker && activeMarker !== tag.id ? false : true }
        onClick={(e) => this.props.handleMarkerClick(e.latlng, tag.id)}
      >
        <Popup minWidth={320} closeButton={false}>
          <InstagramEmbed url={tag.instagram_embed} maxWidth={320} hideCaption={true} />
        </Popup>
      </Marker>
    )
    return (
      <div>{tagMarkers}</div>
    )
  }
}

export default TagMarkers
