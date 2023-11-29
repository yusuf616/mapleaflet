import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap, useMapEvent } from "react-leaflet";

export const LocationMarker = ({
    children,
    location = null,
    setLocation = () => { },
    message = null,
    checkLocation = false

}) => {
    const [position, setPosition] = useState(location);
    const map_=useMap();
    useEffect(() => {
        setLocation(position);
    }, [position]);



    const mapClick = useMapEvent('click', (e) => {
        checkLocation?setPosition(e?.latlng):<></>;
        mapClick.flyTo(e?.latlng, mapClick.getZoom());
    });



    const customIcon = new Icon({
        iconUrl: "/ikon.png",
        iconSize: [30, 30]
    })

    useEffect(()=>{
        location?.lat?setPosition(location):<></>;
        location?.lat?map_.flyTo(location, map_.getZoom()):<></>;
    },[location]);

    return <> {
        position ? <Marker position={position} icon={customIcon} >
            <Popup>{message}</Popup>
        </Marker> : <></>
    }
    </>
}

