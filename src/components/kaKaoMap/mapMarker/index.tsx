import { MapMarker, useMap } from "react-kakao-maps-sdk";

interface EventMarkerContainerProps {
  position: positonDto;
}

interface positonDto {
  lat: number;
  lng: number;
}
const imageSize = { width: 25, height: 26 };

const EventMarkerContainer = ({ position }: EventMarkerContainerProps) => {
  const map = useMap();

  const markerClick = async (marker: any) => {
    const center = marker.getPosition();

    if (map.getLevel() > 4) {
      map.setCenter(center);
      map.setLevel(4, { animate: true });
    } else {
      map.panTo(center);
    }
  };

  return (
    <>
      <MapMarker
        position={position}
        onClick={markerClick}
        image={{ src: "/img/kakaoMap/iconHome.png", size: imageSize }}
      ></MapMarker>
    </>
  );
};

export default EventMarkerContainer;
