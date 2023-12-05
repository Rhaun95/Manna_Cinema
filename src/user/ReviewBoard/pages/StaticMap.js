import React from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";


function StaticMap(props) {
    const Lat = props.Lat
    const Lng = props.Lng
    const location = props.location

    console.log(typeof Lat, Lat)
    console.log(typeof Lng, Lng)
    console.log(typeof location, location)


    const moveSearch = () => {
        /*    window.confirm( location + '에 대한 검색창으로 이동합니다.')*/
        window.open('https://map.kakao.com/link/search/' + location, '_blank')

    }

    return (
        <>
            <Map // 지도를 표시할 Container
                center={{
                    // 지도의 중심좌표
                    lat: 37.542187545869595,
                    lng: 127.07130016068099,
                }}
                style={{
                    // 지도의 크기
                    width: "400px",
                    height: "320px",
                }}
                level={5} // 지도의 확대 레벨
            >
                <MapMarker // 마커를 생성합니다
                    position={{
                        // 마커가 표시될 위치입니다
                        lat: Lat,
                        lng: Lng,
                    }}

                    onClick ={moveSearch}
                >

                </MapMarker>
            </Map>
        </>
    )


}

export default StaticMap;