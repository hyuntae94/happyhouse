import MyPageHeader from '@common/header';
import classNames from 'classnames/bind';
import styles from './call-inquiry.module.scss';

const cx = classNames.bind(styles);
const CallInquiry = () => {
  return (
    <>
      <MyPageHeader type="call-inquiry" />
      <div className={cx('textWrapper')}>
        <h3>전화 문의한 방이 없습니다.</h3>
        <h3>관심있는 방을 문의 해보세요</h3>
      </div>
    </>
  );
};

export default CallInquiry;
