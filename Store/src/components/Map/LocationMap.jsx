import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const marker = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMap = () => {
  // Replace these with your actual store coordinates
  const position = [26.7271, 85.9407];

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={marker}>
          <Popup>
            <div className="text-center">
              <strong>FakeStore</strong>
              <br />
              We're here to help!
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;