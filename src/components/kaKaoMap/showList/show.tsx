import { useRouter } from "next/router";

import classNames from "classnames/bind";
import styles from "./showList.module.scss";

const cx = classNames.bind(styles);

const Show = ({ data, type }: any) => {
  if (!data) return null;

  const router = useRouter();

  if (!data?.length)
    return <div className={cx("noItem")}>매물이 없습니다!</div>;
  return (
    <div className={cx("list_wrapper")}>
      {data.map((item: any, idx: number) => (
        <div
          className={cx("house")}
          key={item.id}
          onClick={() => router.push(`/detail/${item.id}`)}
        >
          <div className={cx("houseImg")}>
            <img src={`/img/${type}/img${idx % 9}.jpg`} alt="매물사진"></img>
          </div>
          <div className={cx("content_wrapper")}>
            <div className={cx("houseType")}>{item.houseType}</div>
            <div className={cx("houseName")}>{item.houseName}</div>
            <div className={cx("price")}>
              <span className={cx("selected")}>{item.price}</span>
            </div>
            <div className={cx("netLeasableArea")}>
              {item.netLeasableArea + ` / 관리비 ${item.maintenanceCost}만`}
            </div>
            <p className={cx("info")}>★역세권/3분거리/신축건물/풀옵션★</p>
            <p className={cx("info")}>☞☞☞전화,문자 문의 가능</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;
