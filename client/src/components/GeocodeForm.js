import React, { useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import MapCont from "./Map"


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

const GeocodeForm = () => {

    const [locationInput, setLocation] = useState({
        mapLat: 32.712043,
        mapLng: -117.142254,
        addressRes: ""
    } )

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let address = locationInput.addressRes
        console.log(address)

        Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            setLocation({...locationInput, mapLat: lat})
            setLocation({...locationInput, mapLng: lng})
            setLocation({...locationInput, addressRes: response.results[0].formatted_address})
            console.log(response.results[0])
            console.log(response.results[0].formatted_address)
            },
            error => {
            console.error(error);
            }
        );
    }

    const setSearchInput = (e) => {
        setLocation({...locationInput, addressRes: e.target.value})
    }

        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        {/* <Form onSubmit={this.handleFormSubmit}>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            Location:
                                    </InputGroup.Text>
                                    </InputGroup.Prepend>

                                    <FormControl
                                        value={this.addressRes}
                                        type="text"
                                        name="eventName"
                                        // onChange={handleChange}
                                        ref={this.setSearchInput}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form> */}

                        <form className="form" onSubmit={handleFormSubmit}>
                            <div className="row">
                                <div className="col-xs-8 col-sm-10">

                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="address">Address</label>
                                        <input type="text"
                                            className="form-control input-lg"
                                            id="address"
                                            placeholder="Place"
                                            onChange={setSearchInput}
                                            
                                            required />
                                    </div>

                                </div>
                                <div className="col-xs-4 col-sm-2">
                                    {/* 
                        <button type="submit" className="btn btn-default btn-lg"> */}
                                    {/* <span className="glyphicon glyphicon-search" aria-hidden="true"></span> */}
                                    {/* Submit
                        </button> */}

                                </div>
                            </div>
                        </form>

                        {/* <div className="row">
                            <div className="col-sm-12">

                                <p className="bg-info">{this.state.addressRes}</p>

                                <div className="map">
                                    <MapCont lat={this.state.mapLat} lng={this.state.mapLng}></MapCont>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        )
    
}

export default GeocodeForm