import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import { Marker as M } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordsDTO } from "./coords.model";
import { useState } from "react";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ height }: MapProps) {
  const [coords, setCoords] = useState<coordsDTO[]>([]);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: height }}>
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClick
        setCoords={(coords) => {
          setCoords([coords]);
        }}
      />
      {coords.map((coords, index) => (
        <Marker key={index} coords={coords} />
      ))}
    </MapContainer>
  );
}

export interface MapProps {
  height: string;
}

Map.defaultProps = {
  height: "500px",
};

function MapClick({ setCoords }: MapClickProps) {
  useMapEvent("click", (e) => {
    setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}

export interface MapClickProps {
  setCoords: (coords: coordsDTO) => void;
}

function Marker({ coords }: MarkerProps) {
  return <M position={[coords.lat, coords.lng]}></M>;
}

interface MarkerProps {
  coords: coordsDTO;
}
