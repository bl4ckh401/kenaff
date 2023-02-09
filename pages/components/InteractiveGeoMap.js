import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveGeoMap = () => {
    const [position, setPosition] = useState([51.505, -0.09]);

    return (
        <div className="container mx-auto">
            <Map className="w-full h-64 border border-gray-300 rounded-lg shadow-lg" center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        </div>

    );
};

export default InteractiveGeoMap;
