import MyPageHeader from '@common/header';
import classNames from 'classnames/bind';
import styles from './inquiry-list.module.scss';

const cx = classNames.bind(styles);

const InquiryList = () => {
  return (
    <>
      <MyPageHeader type="inquiry-list" />
      <div className={cx('topWrapper')}>
        <li>최근 6개월 이내의 문의 내역을 확인하실 수 있습니다.</li>
        <li>문의하신 내용에 대한 수정 및 삭제는 답변 등록 이전에 가능합니다.</li>
        <li>고객센터 답변 가능 시간 : 평일 10:00~18:30 (토, 일요일, 공휴일 휴무)</li>
      </div>
      <p className={cx('content')}>최근 6개월 간 문의하신 내역이 없습니다.</p>
    </>
  );
};

export default InquiryList;
