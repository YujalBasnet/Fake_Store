import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const shopPosition = [
  26.646944892987698,
  87.34774516931788,
];

const shopIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationMap = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="h-[450px] w-full">
        <MapContainer
          center={shopPosition}
          zoom={16}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={shopPosition} icon={shopIcon}>
            <Popup>
              <div className="text-center">
                <strong>FakeStore</strong>
                <br />
                Our Shop Location
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="p-5">
        <p className="text-sm text-slate-500">
          📍 Visit us at our FakeStore location.
        </p>
      </div>
    </div>
  );
};

export default LocationMap;