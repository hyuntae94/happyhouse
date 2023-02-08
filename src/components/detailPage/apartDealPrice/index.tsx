import Chart from './chart';
import MaemaeDealPrice from './maemae';

import classNames from 'classnames/bind';
import styles from './apartDealPrice.module.scss';

const cx = classNames.bind(styles);

const ApartDealPrice = () => {
  return (
    <div className={cx('price__wrapper')}>
      <Chart />
      <MaemaeDealPrice />
    </div>
  );
};

export default ApartDealPrice;
