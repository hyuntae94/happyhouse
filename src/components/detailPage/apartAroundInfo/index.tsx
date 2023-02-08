import classNames from 'classnames/bind';
import styles from './apartAroundInfo.module.scss';
import InfoMap from './infoMap';

const cx = classNames.bind(styles);

const ApartAroundInfo = () => {
  return (
    <div className={cx('aroundInfoWrapper')}>
      <div className={cx('titleWrapper')}>
        <span className={cx('title')}>위치 및 주변 시설 정보</span>
        <span className={cx('content')}>서울특별시 서초구 방배로32길 17-23</span>
      </div>
      <InfoMap />
    </div>
  );
};

export default ApartAroundInfo;
