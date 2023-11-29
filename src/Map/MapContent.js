import { useMap } from "react-leaflet";
import { LocationMarker } from "./LocationMarker";
import { MyLocation } from "./MyLocation";
import { useMyContext } from "../Context/Context";
import { useEffect } from "react";






export const MapContent=({children})=>{
    const {element}=useMyContext();
    const map_=useMap();

    useEffect(()=>{
        element?.MyLocation?map_?.flyTo(element?.MyLocation ):<></>;
    },[]);
    return(<>
        {children}
        <LocationMarker
            checkLocation={true}
            // location={location}  setLocation={setLocation}
            
        />
        <MyLocation />
    </>);
}