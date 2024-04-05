import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React, { Component } from 'react'


export class MapTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [{ lat: 22.5789248, lng: 120.3000704 },
            { latitude: 22.7007095, longitude: 120.2960015 },
            { latitude: 22.6179453, longitude: 120.287343 },
            { latitude: 22.6891426, longitude: 120.3078181 },
            { latitude: 22.6891858, longitude: 120.2897933 },
            { latitude: 22.6210894, longitude: 120.3163911 }]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
            onClick={() => console.log("You clicked: " + store.name)} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 22.5789248, lng: 120.3000704 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAHFrjbu51UUJwGpirJ1l6vhsfT6LbFcrY'
})(MapTest)


const mapStyles = {
    width: '100%',
    height: '100%'
};