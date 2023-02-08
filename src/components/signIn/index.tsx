import Loading from '@common/loading';
import { useLogin } from '@query/loginQuery';
import { useForm } from 'react-hook-form';
import LoginRq from 'src/domain/rq/login/LoginRq';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import classNames from 'classnames/bind';
import styles from './signIn.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from 'src/store/reducer/loginReducer';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRq>({ mode: 'onChange', resolver: yupResolver(schema) });
  const { mutate, isLoading } = useLogin();

  const { token } = useSelector((state: any) => state.login);
  const router = useRouter();

  if (token) router.push('/');

  const dispatch = useDispatch(); //임시 로그인을 위해

  // const onVaild = (params: LoginRq) => {
  //   mutate(params);
  // };

  const sumbit = () => {
    dispatch(
      setToken({
        token: 'tmpToken',
      }),
    );
  };
  if (isLoading) return <Loading></Loading>;

  return (
    <div className={cx('Loggin_wrapper')}>
      <div className={cx('wrapper')}>
        <div className={cx('Loggin_title')}>
          <span className={cx('title')}>로그인하기</span>
          <span className={cx('subTitle')}>서비스 이용을 위해 로그인을 해주세요</span>
        </div>
        {/* <form className={cx('Loggin')} onSubmit={handleSubmit(onVaild)}> */}
        <form className={cx('Loggin')} onSubmit={sumbit}>
          <div className={cx('IdPwTitle')}>아이디</div>
          <input {...register('email')} type="text" placeholder="아이디를 입력해주세요" />
          <span className={cx('error', { visible: errors.email })}>이메일 형식이 틀렸습니다</span>
          <div className={cx('IdPwTitle')}>비밀번호</div>
          <input {...register('password')} type="password" placeholder="비밀번호를 입력해주세요" />
          <span className={cx('error', { visible: errors.password })}>5자 이상 입력해주세요</span>
          <div className={cx('signUp_find')}>
            <span className={cx('singUp')} onClick={() => router.push('/join')}>
              회원가입
            </span>
            <span className={cx('findIdPw')}>아이디/비밀번호 찾기</span>
          </div>
          <input className={cx('Loggin_button')} type="submit" value="로그인" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
