import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = ( props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showinInfoWindow: true
        });
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{lat: 41.886419, lng: -87.629172}}
            >

                <Marker
                    title={'Initial Coordinates'}
                    name={"Chicago, IL 60601"}
                    position={{lat: 41.886419, lng: -87.629172}}
                    onClick={this.onMarkerClick}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={true}
                >
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAoKYl5frSl9S8J9KHxJAasROyyR9Ns23w'
})(MapContainer);
