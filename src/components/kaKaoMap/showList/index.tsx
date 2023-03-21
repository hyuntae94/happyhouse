import React, { useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from "./showList.module.scss";
import axios from "axios";

import Loading from "@common/loading";
import Show from "./show";

const cx = classNames.bind(styles);

interface typeProps {
  type: string;
}

const ShowList = ({ type }: typeProps) => {
  const [data, setData] = useState<any>(null);

  const getItem = async () => {
    const { data } = await axios.get(`/data/${type}/${type}.json`);
    setData(data);
  };

  useEffect(() => {
    getItem();
  }, []);

  if (!data) return <Loading />;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("recom")}>
        이 지역 추천 매물
        <img
          src={"/img/itemList/iconQuestion.png"}
          height="20px"
          style={{ marginLeft: "4px" }}
          alt={"정보아이콘"}
        ></img>
      </div>
      <Show data={data} type={type} />
    </div>
  );
};

export default ShowList;
