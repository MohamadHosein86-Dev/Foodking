"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function MapCountanerShop() {
  const position = [36.3109408, 59.5121897];
  return (
    <MapContainer className=" z-[100] w-full h-full shadow-2xl " center={position} zoom={12} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
    </MapContainer>
  );
}
