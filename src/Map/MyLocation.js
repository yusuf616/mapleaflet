import {  useEffect, useState } from 'react';
import {useGeolocated} from 'react-geolocated';
import { Marker } from 'react-leaflet';
import { LocationMarker } from './LocationMarker';
import { useMyContext } from '../Context/Context';


export const MyLocation=(props)=>{
    const {element,setElement}=useMyContext();
    const [position,setPosition]=useState(null);
    const myLocated=useGeolocated({
        positionOptions:{
            enableHighAccuracy:false
        },
        userDecisionTimeout:1000
    });

    useEffect(()=>{
        // console.log(myLocated?.coords);
        setElement(prev=>({...prev,myLocation:{lat:myLocated?.coords?.latitude,lng:myLocated?.coords?.longitude}}))
        // setPosition({lat:myLocated?.coords?.latitude,lng:myLocated?.coords?.longitude})
    },[myLocated?.coords]);


    return(<LocationMarker checkLocation={false} location={element?.myLocation} message={'myLocation'} />);
}



