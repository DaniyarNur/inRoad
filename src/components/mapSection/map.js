import styles from "./styleMap.module.css";
import React, {useEffect, useState} from 'react';
import { useMemo} from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import dot from "../../assets/redDot.png"

// import axios from "axios";

export const Map = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://gentle-harbor-31655.herokuapp.com/api/cracks/?format=json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);



    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD-N6PoCm0GYqouEiF9H90uQxfBfYVJHyw"
    })

    const center = useMemo(() => ({lat: 43.238189, lng: 76.893086}), []);
    const google = window.google;



    if (!isLoaded) return <div>Loading...</div>
    return(
        <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName={styles.mapContainer}>
            {data.map((point, i) => (
                <MarkerF
                    key={i}
                    position={{ lat: data[i].latitude, lng: data[i].longitude }}
                    icon={{url: dot, scaledSize:  new google.maps.Size(10,10)}}
                />
                ))}
        </GoogleMap>
    )
}


export default Map;
