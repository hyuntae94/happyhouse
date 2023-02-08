import classNames from 'classnames/bind';
import styles from './maemaeDealPrice.module.scss';

const cx = classNames.bind(styles);

import { useEffect, useState } from 'react';
import axios from 'axios';

const MaemaeDealPrice = () => {
  const [maemae, setMaemae] = useState<any>(null);

  const getData = async () => {
    const { data } = await axios.get('/data/maemae/maemaePrice.json');
    setMaemae(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!maemae) return null;

  return (
    <div className={cx('maemaePriceWrapper')}>
      <div className={cx('title')}>
        <span className={cx('title__section1')}>매매 실거래가</span>
        <span className={cx('title__section2')}>2023.01 국토교통부 기준</span>
      </div>
      <div className={cx('contents')}>
        <div className={cx('content')}>
          <span className={cx('contract__Date')}>계약일</span>
          <span className={cx('contract__Price')}>매매가</span>
        </div>
        {maemae.map((item: any, idx: number) => (
          <div className={cx('content')} key={idx}>
            <span className={cx('date')}>{item.date}</span>
            <span className={cx('price')}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaemaeDealPrice;
