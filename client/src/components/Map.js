import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '400px',
    height: '300px',
    margin: '5px'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
        }
    }


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        console.log("Map log", this.props.lat,this.props.lng)
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter= {{ lat: 32.712043, lng: -117.142254 }}
                center={{ lat: this.props.lat, lng: this.props.lng }}
                onClick={this.onMapClicked}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: this.props.lat, lng: this.props.lng }}
                    name={'Current Location'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>

                

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,

})(MapContainer);