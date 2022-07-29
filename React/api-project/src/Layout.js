import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cafe from './Cafe';
import Image from './Image';
import Blog from './Blog';
import News from './News';
import Movie from './Movie';

const Layout = ({ search, page, bools }) => {
  const [itemData, setItemData] = useState('');
  const NaverClienetId = 'vVOitlKFi6Vx2RwsEtjA';
  const NaverClientSecret = 'QVD9kslfC7';
  const category = page;
  const url = `v1/search/${category}?query=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios
          .get(url, {
            params: {
              start: 1, //검색 시작 위치
              display: 25, // 가져올 이미지 갯수
              sort: 'sim', //정렬 유형 (유사도)
            },
            headers: {
              'X-Naver-Client-Id': NaverClienetId,
              'X-Naver-Client-Secret': NaverClientSecret,
            },
          })
          .then((response) => {
            setItemData(response.data.items);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [page]);
  return (
    <div>
      {category === 'cafearticle' && bools
        ? itemData.map((items) => <Cafe key={items.link} items={items} />)
        : category === 'image' && bools
        ? itemData.map((items) => <Image key={items.link} items={items} />)
        : category === 'blog' && bools
        ? itemData.map((items) => <Blog key={items.link} items={items} />)
        : category === 'news' && bools
        ? itemData.map((items) => <News key={items.link} items={items} />)
        : category === 'movie' && bools
        ? itemData.map((items) => <Movie key={items.link} items={items} />)
        : null}
    </div>
  );
};

export default Layout;
