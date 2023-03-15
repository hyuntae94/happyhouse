import classNames from "classnames/bind";
import styles from "./chart.module.scss";
import React, { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const cx = classNames.bind(styles);

export const options = {
  responsive: true,
};

const MAEMAE_DATA = [
  {
    price: 8.5,
    date: "2019-05",
    state: "unstable",
  },
  {
    price: 7.8,
    date: "2020-05",
    state: "stable",
  },
  {
    price: 9.4,
    date: "2021-05",
    state: "unstable",
  },
  {
    price: 9.7,
    date: "2022-05",
    state: "stable",
  },
];
const JEONSE_DATA = [
  {
    price: 5.6,
    date: "2019-05",
    state: "unstable",
  },
  {
    price: 4.9,
    date: "2020-05",
    state: "stable",
  },
  {
    price: 5.3,
    date: "2021-05",
    state: "unstable",
  },
  {
    price: 6.8,
    date: "2022-05",
    state: "stable",
  },
];
const WOLSE_DATA = [
  {
    price: 100,
    date: "2019-05",
    state: "unstable",
  },
  {
    price: 120,
    date: "2020-05",
    state: "stable",
  },
  {
    price: 140,
    date: "2021-05",
    state: "unstable",
  },
  {
    price: 150,
    date: "2022-05",
    state: "stable",
  },
];
export const MAEMAE = {
  labels: MAEMAE_DATA.map((data) => data.date),
  datasets: [
    {
      label: "매매 가격(억)",
      data: MAEMAE_DATA.map((data) => data.price),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointBackgroundColor: MAEMAE_DATA.map((data) => {
        if (data.state === "stable") {
          return "#a5d6a7";
        }
        return "red";
      }),
      pointRadius: 8,
    },
  ],
};
export const JEONSE = {
  labels: JEONSE_DATA.map((data) => data.date),
  datasets: [
    {
      label: "전세 가격(억)",
      data: JEONSE_DATA.map((data) => data.price),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointBackgroundColor: JEONSE_DATA.map((data) => {
        if (data.state === "stable") {
          return "#a5d6a7";
        }
        return "red";
      }),
      pointRadius: 8,
    },
  ],
};
export const WOLSE = {
  labels: WOLSE_DATA.map((data) => data.date),
  datasets: [
    {
      label: "월세 가격(만)",
      data: WOLSE_DATA.map((data) => data.price),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointBackgroundColor: WOLSE_DATA.map((data) => {
        if (data.state === "stable") {
          return "#a5d6a7";
        }
        return "red";
      }),
      pointRadius: 8,
    },
  ],
};

function Chart() {
  const [type, setType] = useState(JEONSE);

  const change = (e: RadioChangeEvent) => {
    if (e.target.value === "MAEMAE") setType(MAEMAE);
    else if (e.target.value === "JEONSE") setType(JEONSE);
    else setType(WOLSE);
  };

  return (
    <div className={cx("chart__container")}>
      <div className={cx("selected")}>
        <Radio.Group
          defaultValue="JEONSE"
          buttonStyle="solid"
          onChange={change}
        >
          <Radio.Button
            className={cx("button", { checked: type === MAEMAE })}
            value="MAEMAE"
          >
            매매
          </Radio.Button>
          <Radio.Button
            className={cx("button", { checked: type === JEONSE })}
            value="JEONSE"
          >
            전세
          </Radio.Button>
          <Radio.Button
            className={cx("button", { checked: type === WOLSE })}
            value="WOLSE"
          >
            월세
          </Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <Line options={options} data={type} className={cx("chart")} />
      </div>
    </div>
  );
}

export default Chart;
