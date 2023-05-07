import {
  Map,
  MapMarker,
  MapTypeControl,
  MapTypeId,
  Roadview,
  ZoomControl,
} from "react-kakao-maps-sdk";
import EventMarkerContainer from "@components/kaKaoMap/mapMarker";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Loading from "@common/loading";
import ShowList from "./showList";

import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

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
  const [center, setCenter] = useState<centerDto>({
    lat: 37.530815367930174,
    lng: 127.00488182404571,
  });
  // 로드뷰 변수선언
  const [isAtive, setIsAtive] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const mapRef = useRef<any>();
  const roadviewRef = useRef<any>();
  //<--->
  const getData = async () => {
    const { data } = await axios.get(`/data/home/${type}Data.json`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // 로드뷰 side-effect
  //---
  useEffect(() => {
    const map = mapRef.current;
    const roadview = roadviewRef.current;

    if (map && roadview) {
      roadview.relayout();
      map.relayout();
      map.setCenter(new kakao.maps.LatLng(center.lat, center.lng));
    }
  }, [isVisible, center, isAtive]);
  //---

  if (!data) return <Loading />;
  return (
    <>
      <Map
        center={center}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0 }}
        level={7}
        ref={mapRef}
      >
        {data.map((value: any) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={value.latlng}
            type={type}
          />
        ))}
        {isAtive && (
          <>
            <MapTypeId type={kakao.maps.MapTypeId.ROADVIEW}></MapTypeId>
            <MapMarker
              //  마커생성될때 마우스랑 마커 같이 움직이게 하기!!!!!
              title="원하는 위치에 아이콘을 놓아주세요."
              zIndex={20}
              position={center}
              draggable={true}
              onDragEnd={(marker: kakao.maps.Marker) => {
                setCenter({
                  lat: marker.getPosition().getLat(),
                  lng: marker.getPosition().getLng(),
                });
              }}
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",
                size: { width: 500, height: 500 },
                options: {
                  spriteSize: { width: 1666, height: 168 },
                  spriteOrigin: { x: 705, y: 114 },
                  offset: { x: 13, y: 46 },
                },
              }}
            ></MapMarker>
          </>
        )}
        <ZoomControl position={kakao.maps.ControlPosition.BOTTOMRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
      {/* 로드뷰 활성화 버튼 */}
      <div
        className={cx("roadviewControlContainer")}
        onClick={() => {
          // setIsVisible(true);
          setIsAtive(!isAtive);
        }}
      >
        <span className={cx("roadviewControl", isAtive ? "active" : "")}>
          <p className={cx("roadViewInfo")}>로드뷰</p>
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          width: isVisible ? "100%" : "0",
          height: "100%",
          right: 0,
          top: 0,
          zIndex: 200,
        }}
      >
        <Roadview // 로드뷰를 표시할 Container
          position={{ ...center, radius: 50 }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "100%",
          }}
          onPositionChanged={(rv: kakao.maps.Roadview) => {
            setCenter({
              lat: rv.getPosition().getLat(),
              lng: rv.getPosition().getLng(),
            });
          }}
          onPanoidChange={() => {
            isAtive && setIsVisible(true);
          }}
          onErrorGetNearestPanoId={() => {
            setIsVisible(false);
          }}
          ref={roadviewRef}
        >
          <button
            className={cx("closeRoadView", isVisible ? "visble" : "")}
            title="로드뷰닫기"
            onClick={() => setIsVisible(false)}
          >
            <span className={cx("closeX")}>X</span>
          </button>
        </Roadview>
      </div>

      {/* 매물리스트 컴포넌트 */}
      <ShowList type={type} />
    </>
  );
};

export default Home;
