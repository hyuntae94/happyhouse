import { Map, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk";
import EventMarkerContainer from "@components/kakaoMap/mapMarker";

import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@common/loading";
import ShowList from "./showList";
export interface mapCenter {
  center: centerDto;
}

interface centerDto {
  lat: number;
  lng: number;
}

interface typeProps {
  type: string;
}

const Home = ({ type }: typeProps) => {
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    const { data } = await axios.get("/data/home/data.json");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <Loading />;
  return (
    <>
      <Map
        center={{ lat: 37.530815367930174, lng: 127.00488182404571 }}
        style={{ width: "100%", height: "100vh", position: "absolute", top: 0 }}
        level={7}
      >
        {data.map((value: any) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={value.latlng}
          />
        ))}
        <ZoomControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
      <ShowList type={type} />
    </>
  );
};

export default Home;
