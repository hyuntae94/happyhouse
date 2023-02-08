import React from 'react';
import MyPageHeader from '@common/header';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import classNames from 'classnames/bind';
import styles from './mypage.module.scss';

const cx = classNames.bind(styles);

const MyPage = () => {
  const { token } = useSelector((state: any) => state.login);
  const router = useRouter();

  if (!token) router.push('/login');

  return (
    <>
      <MyPageHeader type="mypage" />
      <div className={cx('infoWrapper')}>
        <div className={cx('image')}>
          <Avatar size={80} icon={<UserOutlined />} />
        </div>
        <div className={cx('contentsWrapper')}>
          <div>
            <p>아이디</p>
            <input className={cx('idInput')} type={'text'} value={'abcdefgh@naver.com'} disabled={true} />
          </div>
          <div>
            <p>닉네임</p>
            <div className={cx('inputButton')}>
              <input type={'text'} value={'HappHouse'} disabled={true} />
              <button>수정</button>
            </div>
          </div>
          <div>
            <p>이름</p>
            <div className={cx('inputButton')}>
              <input type={'text'} value={'HappyHouse'} disabled={true} />
              <button>수정</button>
            </div>
          </div>
          <div>
            <p>휴대폰 번호</p>
            <div className={cx('inputButton')}>
              <input type={'text'} value={'01012345678'} disabled={true} />
              <button>수정</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
