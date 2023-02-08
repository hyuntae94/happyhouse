import { Map, MapMarker } from "react-kakao-maps-sdk";

const imgSize = { width: 70, height: 70 };
const convention = [
  {
    title: "home",
    latlng: {
      lat: 37.49251803780495,
      lng: 126.99244636691866,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/MyHome.png",
  },
  {
    title: "subway",
    latlng: {
      lat: 37.49303369536814,
      lng: 126.9901508089191,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/subway.png",
  },
  {
    title: "subway",
    latlng: {
      lat: 37.49213273656424,
      lng: 126.99075023934402,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/subway.png",
  },
  {
    title: "mart",
    latlng: {
      lat: 37.49280861552313,
      lng: 126.99249156916633,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/mart.png",
  },
  {
    title: "mart",
    latlng: {
      lat: 37.49197970610669,
      lng: 126.99276869208572,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/mart.png",
  },
  {
    title: "mart",
    latlng: {
      lat: 37.491731967719176,
      lng: 126.9934302173224,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/mart.png",
  },
  {
    title: "convenience",
    latlng: {
      lat: 37.49229048695632,
      lng: 126.99175096015715,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/convenienceStore.png",
  },
  {
    title: "convenience",
    latlng: {
      lat: 37.49228155752101,
      lng: 126.99300047284973,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/convenienceStore.png",
  },
  {
    title: "convenience",
    latlng: {
      lat: 37.491695754169996,
      lng: 126.99082944720094,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/convenienceStore.png",
  },
  {
    title: "bank",
    latlng: {
      lat: 37.493083510448955,
      lng: 126.99402941865809,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/bank.png",
  },
  {
    title: "bank",
    latlng: {
      lat: 37.49339420518705,
      lng: 126.99153033343285,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/bank.png",
  },
  {
    title: "bank",
    latlng: {
      lat: 37.492159967852324,
      lng: 126.99383160602339,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/convention/bank.png",
  },
];
const safety = [
  {
    title: "home",
    latlng: {
      lat: 37.49251803780495,
      lng: 126.99244636691866,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/MyHome.png",
  },
  {
    title: "cctv",
    latlng: {
      lat: 37.492159967852324,
      lng: 126.99383160602339,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/cctv.png",
  },
  {
    title: "cctv",
    latlng: {
      lat: 37.492889719282424,
      lng: 126.99270075701193,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/cctv.png",
  },
  {
    title: "cctv",
    latlng: {
      lat: 37.49347956975977,
      lng: 126.98875986896738,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/cctv.png",
  },
  {
    title: "cctv",
    latlng: {
      lat: 37.49157870825782,
      lng: 126.99199980766615,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/cctv.png",
  },
  {
    title: "cctv",
    latlng: {
      lat: 37.491973066044636,
      lng: 126.9950472047111,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/cctv.png",
  },
  {
    title: "police",
    latlng: {
      lat: 37.49314208045247,
      lng: 126.99411987741996,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/police.png",
  },
  {
    title: "police",
    latlng: {
      lat: 37.49223186959239,
      lng: 126.9910385757841,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/safety/police.png",
  },
];
const study = [
  {
    title: "home",
    latlng: {
      lat: 37.49251803780495,
      lng: 126.99244636691866,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/MyHome.png",
  },
  {
    title: "preSchool",
    latlng: {
      lat: 37.493058646814035,
      lng: 126.99251981392541,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/study/preschool.png",
  },
  {
    title: "kindergarten",
    latlng: {
      lat: 37.49256771792289,
      lng: 126.99474750764729,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/study/kindergarten.png",
  },
  {
    title: "middleSchool",
    latlng: {
      lat: 37.49170268150427,
      lng: 126.99336802747689,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/study/middleSchool.png",
  },
  {
    title: "highSchool",
    latlng: {
      lat: 37.49116186156567,
      lng: 126.9902584771853,
    },
    imgPath:
      "https://raw.githubusercontent.com/hyuntae94/happyhouse/master/public/img/menuIcon/study/highSchool.png",
  },
];
const AroundMap = ({ option }: any) => {
  let data = convention;
  if (option === "convention") data = convention;
  else if (option === "safety") data = safety;
  else if (option === "study") data = study;

  return (
    <Map
      center={{
        lat: 37.49245722269776,
        lng: 126.99249160434219,
      }}
      style={{
        width: "850px",
        height: "345px",
      }}
      level={3}
      zoomable={false}
    >
      {data.map((val, idx) =>
        val.title === "home" ? (
          <MapMarker
            key={idx}
            position={val.latlng}
            image={{ src: val.imgPath, size: { width: 50, height: 65 } }}
          />
        ) : (
          <MapMarker
            key={idx}
            position={val.latlng}
            image={{ src: val.imgPath, size: imgSize }}
          />
        )
      )}
    </Map>
  );
};

export default AroundMap;
