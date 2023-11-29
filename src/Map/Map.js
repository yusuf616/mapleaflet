
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { LocationMarker } from './LocationMarker';
export const Map = ({
    location = null,
    setLocation = () => { }
}) => {

    return (<div style={{ width: '800px', height: '800px' }}>
        <MapContainer

            style={{ width: '100%', height: '100%' }}
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
        >

            <TileLayer

                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker location={location} setLocation={setLocation} />
        </MapContainer>
    </div>);
}