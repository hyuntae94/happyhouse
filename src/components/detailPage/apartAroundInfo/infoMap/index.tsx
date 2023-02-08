import classNames from 'classnames/bind';
import React, { useState } from 'react';
import AroundMap from './aroundMap';
import styles from './infoMap.module.scss';
import MenuIcon from './menuIcon';

const cx = classNames.bind(styles);

const InfoMap = () => {
  const [option, setOption] = useState<string>('convention');

  const changeOption = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.id === 'convention') setOption('convention');
    else if (e.currentTarget.id === 'safety') setOption('safety');
    else if (e.currentTarget.id === 'study') setOption('study');
  };

  return (
    <div className={cx('infoMapWrapper')}>
      <AroundMap option={option} />
      <nav className={cx('menu')}>
        <li
          className={cx({ checked: option === 'convention' })}
          key={'convention'}
          id={'convention'}
          onClick={changeOption}
        >
          편의시설
        </li>
        <li className={cx({ checked: option === 'safety' })} key={'safety'} id={'safety'} onClick={changeOption}>
          안전시설
        </li>
        <li className={cx({ checked: option === 'study' })} key={'study'} id={'study'} onClick={changeOption}>
          학군시설
        </li>
      </nav>
      <MenuIcon option={option} />
    </div>
  );
};

export default InfoMap;
