import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import MapCont from "./Map"

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

export class GeocodeForm extends Component {

state = {
    mapLat: 32.712043,
    mapLng: -117.142254,
    addressRes: ""
}

handleFormSubmit = (event) => {
    event.preventDefault();
    let address = this.setSearchInputElement.value;
    console.log(address)

    Geocode.fromAddress(address).then(
    response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
            mapLat: lat,
            mapLng: lng,
            addressRes: response.results[0].formatted_address
        })
        console.log(response.results[0])
        console.log(response.results[0].formatted_address)
        },
        error => {
        console.error(error);
        }
    );
}

setSearchInput = (inputReference) => {
    this.setSearchInputElement = inputReference
}

render() {
    return (

<div className="container">
    <div className="row">
        <div className="col-sm-12">

            <form className="form" onSubmit={this.handleFormSubmit}>
                <div className="row">
                    <div className="col-xs-8 col-sm-10">

                        <div className="form-group">
                            <label className="sr-only" htmlFor="address">Address</label>
                            <input type="text"
                                className="form-control input-lg"
                                id="address"
                                placeholder="Place"
                                ref={this.setSearchInput}
                                required />
                        </div>

                    </div>
                    <div className="col-xs-4 col-sm-2">

                        <button type="submit" className="btn btn-default btn-lg">
                            {/* <span className="glyphicon glyphicon-search" aria-hidden="true"></span> */}
                            Submit
                        </button>

                    </div>
                </div>
            </form>

            <div className="row">
            <div className="col-sm-12">

            <p className="bg-info">{this.state.addressRes}</p>

            <div className="map">
            <MapCont lat={this.state.mapLat} lng={this.state.mapLng}></MapCont>
            </div>
            </div>
            </div>

        </div>
    </div>
</div>
    )
}
}

export default GeocodeForm