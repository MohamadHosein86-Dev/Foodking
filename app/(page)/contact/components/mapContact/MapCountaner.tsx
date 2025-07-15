"use client";

import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

export default function MapCountanerShop() {
  const position: LatLngExpression = [36.3109408, 59.5121897];

  return (
    <MapContainer className="z-[100] w-full h-full shadow-2xl" center={position} zoom={12} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
    </MapContainer>
  );
}
