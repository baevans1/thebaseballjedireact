import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
render() {
  const style = {
      width: '100vw',
      height: '100vh'

    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    } else {

      return (
        <Map google={this.props.google} zoom={4}
        initialCenter={{
          lat: 38.622634,
          lng: -90.192840
          }}>
          <Marker  />

           <Marker
             position={{lat: 37.762391, lng: -122.439192}}>
          </Marker>
        </Map>


      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCQeJM7i2ifq4XHk58L7jdsnutaw5JYyWg')
})(MapContainer)
