import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "src/store/reducer/loginReducer";
import styles from "./signUp.module.scss";

const cx = classNames.bind(styles);

const SignUp = () => {
  const { token } = useSelector((state: any) => state.login);
  const router = useRouter();
  const dispatch = useDispatch();

  if (token) router.push("/");

  const onClick = () => {
    dispatch(
      setToken({
        token: "tmpToken",
      })
    );
  };

  return (
    <div className={cx("Wrapper")}>
      <h1 className={cx("title")}>회원정보 입력</h1>
      <h4 className={cx("subTitle")}>
        서비스 이용을 위해 아래 정보를 입력해주세요.
      </h4>
      <div className={cx("infoDiv")}>
        <p>아이디</p>
        <input type={"text"} placeholder={"이메일 주소 입력"} />
      </div>
      <div className={cx("infoDiv")}>
        <p>닉네임</p>
        <input type={"text"} placeholder={"한글 또는 영문만 가능"} />
      </div>
      <div className={cx("infoDiv")}>
        <p>비밀번호</p>
        <input
          type={"password"}
          placeholder={"8자리 이상 영문,숫자,특수문자 포함"}
        />
        <input type={"password"} placeholder={"비밀번호 확인"} />
      </div>
      <button className={cx("button")} onClick={onClick}>
        확 인
      </button>
    </div>
  );
};

export default SignUp;
