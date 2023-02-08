import classNames from 'classnames/bind';
import styles from './apartDescription.module.scss';

const cx = classNames.bind(styles);

const ApartDescription = () => {
  return (
    <div className={cx('desWrapper')}>
      <p className={cx('title')}>상세 설명</p>
      <div className={cx('contents')}>
        <p className={cx('header')}>양재시민의 숲역 인근 역세권, 넓게 잘 빠진 투룸입니다.</p>
        <br />
        <p>360º VR, 3D평면도, 매물영상을 클릭하여 생동감 있는 현장을 확인해 보세요.</p>
        <br />
        <div className={cx('contents__part1')}>
          <span>★ 매물 특징 ★</span>
          <span>✔ 신분당선 양재시민의숲역 도보 7분거리 초역세권!</span>
          <span>✔ 대로변과 가까워 대중교통 이용이 편리합니다.</span>
          <span>✔ 즉시 입주 가능합니다.</span>
          <span>✔ 현재 주차는 선착순 가능합니다.</span>
          <span>✔ 관리비에 수도세가 포함되어 있습니다.</span>
          <span>✔ 양재천, 양재시민의 숲 인근으로 여가 생활에 좋습니다.</span>
          <span>✔ 카페, 편의점, 식당, 공원 등 생활 인프라가 좋습니다.</span>
          <br />
          <span>★ 현장촬영 ★</span>
          <span>- [다방]에서 직접 촬영하고 확인한 매물입니다.</span>
          <span>- 부동산 방문없이 편리하게 매물 보기가 가능합니다.</span>
          <span>- 입주를 원하시면 중개사무소에 연락하여 방문일을 예약해보세요.</span>
          <span>- 궁금한 점은 [문의하기] 버튼을 눌러 문의주세요.</span>
          <span>- [다방싸인] 비대면 계약 기능을 지원하지 않는 매물입니다.</span>
          <br />
          <span>★ 매물위치 및 주변환경 ★</span>
          <span>- 위치</span>
          <span> 양재시민의숲역 도보 7분 이내로 접근성이 좋습니다.</span>
          <br />
          <span>- 옵션</span>
          <span> 에어컨, 세탁기, 가스레인지 등</span>
          <br />
          <span>- 편의시설</span>
          <span> 주변 편의시설 다수</span>
        </div>
      </div>
    </div>
  );
};

export default ApartDescription;
