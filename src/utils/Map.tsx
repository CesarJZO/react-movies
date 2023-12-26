import { MapContainer, TileLayer } from "react-leaflet";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ height }: MapProps) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: height }}
    >
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
    </MapContainer>
  );
}

export interface MapProps {
  height: string;
}

Map.defaultProps = {
  height: "500px",
};
