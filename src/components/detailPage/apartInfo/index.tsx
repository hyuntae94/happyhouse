import axios from "axios";
import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from "./apartInfo.module.scss";
const cx = classNames.bind(styles);

const ApartInfo = () => {
  const [houseInfo, setHouseInfo] = useState<any>(null);
  const getHouseDetail = async () => {
    const { data } = await axios.get(`/data/apart/apartDetail101.json`);
    setHouseInfo(data);
  };

  useEffect(() => {
    getHouseDetail();
  }, []);

  if (!houseInfo) return null;

  return (
    <div className={cx("info__wrapper")}>
      <div className={cx("info__top")}>
        <div className={cx("top__left")}>
          <span className={cx("houseType")}>{houseInfo.houseType}</span>
          <span className={cx("houseName")}>{houseInfo.houseName}</span>
          <span className={cx("address")}>{houseInfo.address}</span>
        </div>
        <div className={cx("top__middle")}>
          <div className={cx("middle__content")}>
            <span className={cx("content__name")}>총 세대수</span>
            <span className={cx("content__value")}>
              {houseInfo.totalApartment}세대
            </span>
          </div>
          <div className={cx("middle__content")}>
            <span className={cx("content__name")}>분양세대수</span>
            <span className={cx("content__value")}>
              {houseInfo.bunyangApartment}세대
            </span>
          </div>
          <div className={cx("middle__content")}>
            <span className={cx("content__name")}>최저•최고층</span>
            <span className={cx("content__value")}>
              지하{houseInfo.lowFloor}층•지상{houseInfo.highFloor}층
            </span>
          </div>
          <div className={cx("middle__content")}>
            <span className={cx("content__name")}>단지규모</span>
            <span className={cx("content__value")}>
              총 {houseInfo.totalDong}개동
            </span>
          </div>
        </div>
      </div>
      <div className={cx("info__middle")}>
        <div className={cx("middle__content")}>
          <span className={cx("content__name")}>• 건물 번호</span>
          <span className={cx("content__value")}>
            {houseInfo.buildingNumber}
          </span>
        </div>
        <div className={cx("middle__content")}>
          <span className={cx("content__name")}>• 건물이름</span>
          <span className={cx("content__value")}>{houseInfo.houseName}</span>
        </div>
        <div className={cx("middle__content")}>
          <span className={cx("content__name")}>• 건축년도</span>
          <span className={cx("content__value")}>{houseInfo.buildYear}</span>
        </div>
        <div className={cx("middle__content")}>
          <span className={cx("content__name")}>• 건물유형</span>
          <span className={cx("content__value")}>{houseInfo.houseType}</span>
        </div>
      </div>
      <div className={cx("info__bottom")}>
        <div>
          <img className={cx("apartInfo1")} alt="" />
        </div>
        <div className={cx("bottom__right")}>
          <div className={cx("section__top")}>
            <img className={cx("apartInfo2")} alt="" />
            <img className={cx("apartInfo3")} alt="" />
          </div>
          <div className={cx("section__bottom")}>
            <img className={cx("apartInfo4")} alt="" />
            <div className={cx("apartInfo4_right")}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApartInfo;
