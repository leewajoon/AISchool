import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const LayoutBlock = styled.div`
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  input {
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border-line: solid 1px #ccc;
  }
  .btn {
    text-align: center;
    margin: 0 auto;
    width: 55%;
  }
  button {
    display: inline-block;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    border: none;
    width: 20%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    :placeholder {
      color: #ccc;
    }
    :hover {
      background-color: skyblue;
      border-line: ;
    }
  }
`;

const App = () => {
  const [page, setPage] = useState('news');
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState('인터스텔라');
  const [bools, setBools] = useState(false);

  const onFocus = (e) => {
    setSearch('');
  };

  const onChange = (e) => {
    setSearch(e.target.value);
    setSearchData(search);
  };

  const categories = (e) => {
    setPage(e.target.value);
    setSearchData(search);
    setBools(true);
  };
  return (
    <div>
      <LayoutBlock>
        <div>
          <input
            placeholder="검색어를 입력하세요"
            name="search"
            value={search}
            onChange={onChange}
            onFocus={onFocus}
            required
          />
          {/* <button onClick={onClick}>🔎</button> */}
        </div>
        <div className="btn">
          <button value="news" onClick={categories}>
            뉴스
          </button>
          <button value="blog" onClick={categories}>
            블로그
          </button>
          <button value="cafearticle" onClick={categories}>
            카페
          </button>
          <button value="image" onClick={categories}>
            이미지
          </button>
          <button value="movie" onClick={categories}>
            영화
          </button>
        </div>
        <hr />
      </LayoutBlock>
      <Layout search={searchData} page={page} bools={bools} />
    </div>
  );
};

export default App;
