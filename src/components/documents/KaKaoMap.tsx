const KakaoMap = () => {
  return (
    <script
      type="text/javascript"
      src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_APPKEY}&libraries=services,clusterer,drawing`}
    />
  );
};

export default KakaoMap;
