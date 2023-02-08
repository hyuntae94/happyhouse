const KakaoMap = () => {
  return (
    <script
      type="text/javascript"
      src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer,drawing`}
    />
  );
};

export default KakaoMap;
