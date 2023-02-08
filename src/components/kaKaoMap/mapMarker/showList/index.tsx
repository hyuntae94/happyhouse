import React, { useEffect, useState } from 'react';
import { Select, RadioChangeEvent } from 'antd';

import classNames from 'classnames/bind';
import styles from './showList.module.scss';
import Show from './show';
import axios from 'axios';

const { Option } = Select;
const cx = classNames.bind(styles);

interface ShowListProps {
  id: number | null;
}

const ShowList = ({ id }: ShowListProps) => {
  if (!id) return null;

  const [data, setData] = useState<any>(null);

  const getItem = async () => {
    const { data } = await axios.get(`/data/apart/apart${id}.json`);
    setData(data);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('recom')}>
        이 지역 추천 매물<img src={'/img/itemList/iconQuestion.png'} height="20px" style={{ marginLeft: '4px' }}></img>
      </div>
      <Show data={data} />
    </div>
  );
};

export default ShowList;
