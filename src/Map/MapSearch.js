import Search from "leaflet-search";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
// import {ReactLeafletSearch}  from "react-leaflet-search";
import L from "leaflet";

export const MapSearch=()=>{
    const map=useMap();
    useEffect(()=>{
        map.addControl(new Search({
            url:"https://nominatim.openstreetmap.org/search?format=json&q={s}&countrycodes=th",
            jsonpParam: "json_callback",
            propertyName: "display_name",
            propertyLoc: ["lat", "lon"],
            marker: L.circleMarker([0, 0], { radius: 30 }),
            autoType: false,
            zoom: 15,
            textPlaceholder: "Search",
            collapsed: false,
            autoCollapse: false,
            minLength: 2
        }));
    },[]);

    return <></>
}