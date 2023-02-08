import { MapMarker, useMap } from 'react-kakao-maps-sdk';
import React, { useState } from 'react';
import ShowList from './showList/index';

interface EventMarkerContainerProps {
  id: number;
  position: positonDto;
}

interface positonDto {
  lat: number;
  lng: number;
}
const imageSize = { width: 25, height: 26 };

const EventMarkerContainer = ({ id, position }: EventMarkerContainerProps) => {
  const map = useMap();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const markerClick = async (marker: any) => {
    const center = marker.getPosition();

    if (map.getLevel() > 4) {
      //map크기가 4보다 크면 확대
      map.setCenter(center);
      map.setLevel(4, { animate: true });
    } else {
      //   //4보다 작으면 이동만
      map.panTo(center);
    }
    setSelectedId(id);
  };

  return (
    <>
      <MapMarker
        position={position}
        onClick={markerClick}
        image={{ src: '/img/kakaoMap/iconHome.png', size: imageSize }}
      ></MapMarker>
      <ShowList id={selectedId} />
    </>
  );
};

export default EventMarkerContainer;
