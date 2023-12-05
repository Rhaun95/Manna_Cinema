import React, { useEffect ,useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapItem(props) {
   

    const navigate = useNavigate();
    const {id,lng,lat,cinema_name,star,total_seat} = props.item
    // console.log(lng,lat)
    let reallat = lat
    let reallng = lng
    
    return(
        <div>
        <h1>찾아오시는 길!</h1>        
        <Card className='detailMap' bg="dark">
        <Card.Body>        
            <Map
            center={{  lat : reallat, lng: reallng }}
            style={{ width: "100%", height: "300px"}}>
                <MapMarker position={{ lat : reallat, lng: reallng }}>
                <div style={{color:"#000"}}>만나-극장 {cinema_name}점</div>
                </MapMarker>
            </Map>
        </Card.Body>
        </Card>
        </div>
        )
}
export default MapItem