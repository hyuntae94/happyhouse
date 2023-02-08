import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './myPageHeader.module.scss';

const cx = classNames.bind(styles);

const MyPageHeader = ({ type }: { type: string }) => {
  const router = useRouter();
  console.log(type);
  return (
    <div className={cx('headerWrapper')}>
      <h1 className={cx('title')}>MY House</h1>
      <div className={cx('contents')}>
        <span className={cx({ checked: type === 'text-inquiry' })} onClick={() => router.push('/mypage/text-inquiry')}>
          문자문의
        </span>
        <span className={cx({ checked: type === 'call-inquiry' })} onClick={() => router.push('/mypage/call-inquiry')}>
          전화문의
        </span>
        <span className={cx({ checked: type === 'inquiry-list' })} onClick={() => router.push('/mypage/inquiry-list')}>
          1:1 문의내역
        </span>
        <span
          className={cx({ checked: type === 'fake-room-report' })}
          onClick={() => router.push('/mypage/fake-room-report')}
        >
          허위매물 신고내역
        </span>
        <span className={cx({ checked: type === 'mypage' })} onClick={() => router.push('/mypage')}>
          내 정보
        </span>
      </div>
    </div>
  );
};

export default MyPageHeader;
