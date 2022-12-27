import React, {useEffect} from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import {useMap} from "react-leaflet";


const LeafletRoutingMachine = () =>{
    const map =useMap();
    useEffect(()=>{
        var marker1 = L.marker([33.233334 , -8.500000]).addTo(map);
        map.on("click", function(e){
            L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
            L.Routing.control({
                waypoints: [
                  L.latLng(33.233334 , -8.500000),
                  L.latLng(e.latlng.lat,e.latlng.lng),
                ],
                lineOptions: {
                    styles:[{
                        color : "blue",
                        weight: 4,
                        opacity: 0.7,
                    },
                ],
                },
                routeWhileDragging : false,
                geocoder: L.Control.Geocoder.nominatim(),
                addWaypoints : false,
                draggableWaypoints : false,
                fitSelectedRoutes : true,
                showAlternatives : true,
              })
              .on("routesfound", function(e){
                e.routes[0].coordinates.forEach((c,i)=>{
                    setTimeout(()=>{
                        marker1.setLatLng([c.lat,c.lng]);
                    }, 100 * i)
                });
              })
              .addTo(map);
        });
    },[]);
    return null;

};

export default LeafletRoutingMachine;