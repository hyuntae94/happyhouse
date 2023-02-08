import MyPageHeader from '@common/header';
import classNames from 'classnames/bind';
import styles from './text-inquiry.module.scss';

const cx = classNames.bind(styles);

const TextInquiry = () => {
  return (
    <>
      <MyPageHeader type="text-inquiry" />
      <div className={cx('textWrapper')}>
        <h3>문자 문의한 방이 없습니다.</h3>
        <h3>관심있는 방을 문의 해보세요</h3>
      </div>
    </>
  );
};

export default TextInquiry;
