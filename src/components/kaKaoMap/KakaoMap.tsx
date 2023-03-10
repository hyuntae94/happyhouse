import React from "react";
import { Map, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk";

import EventMarkerContainer from "src/components/kaKaoMap/mapMarker";

export interface mapCenter {
  center: centerDto;
}

interface centerDto {
  lat: number;
  lng: number;
}

const data = [
  {
    id: 100,
    latlng: { lat: 37.530815367930174, lng: 127.00488182404571 },
  },
  {
    id: 100,
    latlng: { lat: 37.5527174326482, lng: 126.95056202312392 },
  },
  {
    id: 100,
    latlng: { lat: 37.56296256082339, lng: 127.01140336115306 },
  },
  {
    id: 100,
    latlng: { lat: 37.55976446844222, lng: 126.91995353068454 },
  },
  {
    id: 100,
    latlng: { lat: 37.52009342705051, lng: 126.88687442293158 },
  },
  {
    id: 100,
    latlng: { lat: 37.51841298323242, lng: 127.03329610722311 },
  },
  {
    id: 100,
    latlng: { lat: 37.50300023262361, lng: 126.91824990344573 },
  },
  {
    id: 100,
    latlng: { lat: 37.49710101556792, lng: 126.93680231159647 },
  },
  {
    id: 100,
    latlng: { lat: 37.487953716175376, lng: 126.95146407760988 },
  },
  {
    id: 100,
    latlng: { lat: 37.53610623715654, lng: 126.9661020211116 },
  },
  {
    id: 100,
    latlng: { lat: 37.53832350999295, lng: 127.04495914745344 },
  },
  {
    id: 100,
    latlng: { lat: 37.49635953860864, lng: 127.02991640664823 },
  },
  {
    id: 100,
    latlng: { lat: 37.51557105794115, lng: 127.09442116061832 },
  },
  {
    id: 100,
    latlng: { lat: 37.6215553133862, lng: 127.04994794720434 },
  },
  {
    id: 100,
    latlng: { lat: 37.576101780103166, lng: 127.06540396005951 },
  },
  {
    id: 100,
    latlng: { lat: 37.501167904636304, lng: 127.06110892567406 },
  },
  {
    id: 100,
    latlng: { lat: 37.55100620825081, lng: 126.97373968064448 },
  },
];

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 37.530815367930174, lng: 127.00488182404571 }}
      style={{ width: "100%", height: "91vh" }}
      level={7}
    >
      {data.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          id={value.id}
          position={value.latlng}
        />
      ))}
      <ZoomControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
      <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
    </Map>
  );
};

export default KakaoMap;
