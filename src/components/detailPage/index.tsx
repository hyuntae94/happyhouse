import ApartInfo from './apartInfo';
import ApartDealPrice from './apartDealPrice';
import ApartAroundInfo from './apartAroundInfo';

import classNames from 'classnames/bind';
import styles from './detailPage.module.scss';
import ApartDescription from './apartDescription';

const cx = classNames.bind(styles);

const DetailPage = () => {
  return (
    <div className={cx('detailWrapper')}>
      <ApartInfo />
      <ApartDealPrice />
      <ApartAroundInfo />
      <ApartDescription />
    </div>
  );
};
export default DetailPage;
