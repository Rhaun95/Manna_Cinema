/*kakaoMap*/
import React, {useState} from 'react'
/*import MapContainer from "./MapContainer";*/
import {useEffect} from "react";



const Location=(props)=> {

    const [inputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
 /*   let markerLng = 0;
    let markerLat = 0;*/

    const onChange = (e) => {

        setInputText(e.target.value)
        console.log("2"+inputText)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(inputText)
        console.log(Place)
        setInputText("");

    }


    const { kakao } = window

    const MapContainer = () => {
        const searchPlace = Place
        console.log(typeof searchPlace, searchPlace)
        useEffect(() => {
            const infowindow = new kakao.maps.InfoWindow({zIndex: 1});
            const container = document.getElementById('myMap')
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,

            }
            const map = new kakao.maps.Map(container, options)

            const ps = new kakao.maps.services.Places()
            

            ps.keywordSearch(searchPlace, placesSearchCB);


            function placesSearchCB(data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    let bounds = new kakao.maps.LatLngBounds()

                    for (let i = 0; i < data.length; i++) {
                        displayMarker(data[i])
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                    }

                    map.setBounds(bounds)
                }
            }

            function displayMarker(place) {
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x),
                })
                //마커 좌표 찍기
                let markerPosition = marker.getPosition();
                let location = Place
                console.log(typeof markerPosition, markerPosition);
                console.log(location)

                //부모로 정보 넘겨주기 위한 props
                 props.getXY(markerPosition.getLat(), markerPosition.getLng(), location)


                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function () {
                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
                    infowindow.open(map, marker)
                })
            }
        }, [searchPlace])

        return (

            <div
                id="myMap"
                style={{

                    width: "500px",
                    height: "450px",
                }}>

            </div>


        )
    }



        return (
            <>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <form className="inputForm" >
                    <input placeholder="검색어를 입력하세요" onChange={onChange} value={inputText} type="text"/>
                    <button onClick={handleSubmit}>검색</button>
                </form>
                <div style={{width:"800px", display:"flex", justifyContent:"center", margin:"20px 0"}}>
                    {MapContainer()}
               </div>
                    {/*    <MapContainer searchPlace={Place}/>*/}
            </div>
            </>
        );

}

export default Location;