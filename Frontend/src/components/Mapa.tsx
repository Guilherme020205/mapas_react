import type { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/Leaflet.css";

export default function Mapa() {
  
  const localizacao_1: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer
      center={localizacao_1}
      zoom={13}
      scrollWheelZoom={true}
      className="w-96 h-96 z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={localizacao_1}>
        <Popup>
          Coisa boa em.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
