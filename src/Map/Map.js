
import { MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

import { useMyContext } from '../Context/Context';
import { useEffect } from 'react';
import { MapContent } from './MapContent';
export const Map = ({
    location = null,
    setLocation = () => { }
}) => {
    const {element}=useMyContext();
    
    useEffect(()=>{
        if(element?.myLocation){
            
            if(element?.myLocation?.lat &&element?.myLocation?.lng ){
                console.log(element?.myLocation)
              
            }
        }
    },[element])
    return (<div style={{ width: '800px', height: '800px' }}>
        <MapContainer

            style={{ width: '100%', height: '100%' }}
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
        >

          <MapContent>
            <TileLayer

                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContent>
        </MapContainer>
    </div>);
}