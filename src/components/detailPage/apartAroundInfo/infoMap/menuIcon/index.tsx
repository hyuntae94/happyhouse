import subway from './menuIcon/convention/subway.png';

import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './menuIcon.module.scss';

const cx = classNames.bind(styles);

const MenuIcon = ({ option }: any) => {
  if (option === 'convention') {
    return (
      <div className={cx('iconsWrapper')}>
        <div className={cx('icon')}>
          <span className={cx('subway')}></span>
          <span>지하철역</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('mart')}></span>
          <span>마트</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('convenience')}></span>
          <span>편의점</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('bank')}></span>
          <span>은행</span>
        </div>
      </div>
    );
  } else if (option === 'safety') {
    return (
      <div className={cx('iconsWrapper')}>
        <div className={cx('icon')}>
          <span className={cx('cctv')}></span>
          <span>CCTV</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('police')}></span>
          <span>경찰</span>
        </div>
      </div>
    );
  } else if (option === 'study') {
    return (
      <div className={cx('iconsWrapper')}>
        <div className={cx('icon')}>
          <span className={cx('preSchool')}></span>
          <span>어린이집</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('kindergarten')}></span>
          <span>유치원</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('middleSchool')}></span>
          <span>중학교</span>
        </div>
        <div className={cx('icon')}>
          <span className={cx('highSchool')}></span>
          <span>고등학교</span>
        </div>
      </div>
    );
  }
  return <div>Error</div>;
};

export default MenuIcon;
