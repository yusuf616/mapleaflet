import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";

export const LocationMarker = ({
    children,
    location = null,
    setLocation = () => { },
    message = null

}) => {
    const [position, setPosition] = useState(location);
    useEffect(() => {
        setLocation(position);
    }, [position]);



    const mapClick = useMapEvent('click', (e) => {
        console.log(e);
        setPosition(e?.latlng);
        mapClick.flyTo(e?.latlng, mapClick.getZoom());
    });

    const customIcon = new Icon({
        iconUrl: "/ikon.png",
        iconSize: [30, 30]
    })

    return <> {
        position ? <Marker position={position} icon={customIcon} >
            <Popup>{message}</Popup>
        </Marker> : <></>
    }
    </>
}