import React from "react";
import styled from "styled-components";
import ImgItem from "./ImgItem";
import { useState, useEffect } from "react";
import axios from "axios";

const ImgListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ImgList = () => {
  const [articles, setArticles] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const NAVER_CLIENT_ID = "vVOitlKFi6Vx2RwsEtjA";
  const NAVER_CLIENT_SECRET = "QVD9kslfC7";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        axios
          .get("/v1/search/image", {
            params: {
              query: "react", //이미지 검색 텍스트
              start: 1, //검색 시작 위치
              display: 5, //가져올 이미지 갯수
              sort: "sim", //정렬 유형 (sim:유사도)
            },
            headers: {
              "X-Naver-Client-Id": NAVER_CLIENT_ID,
              "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
            },
          })
          .then((response) => {
            setData(response.data);
          });
        // axios.defaults.withCredentials = true;

        // const response = await axios.get("/v1/search/image", {
        //   params: {
        //     start: 1, //검색 시작 위치
        //     display: 10, //가져올 이미지 갯수
        //     sort: "sim", //정렬 유형 (sim:유사도)
        //   },
        //   headers: {
        //     "X-Naver-Client-Id": NAVER_CLIENT_ID,
        //     "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        //   },
        // });
        // setArticles(response.data.items);
      } catch (e) {}

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <ImgListBlock>대기중...</ImgListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <ImgListBlock>
      {articles.map((article) => (
        <ImgItem key={article.link} article={article} />
      ))}
    </ImgListBlock>
  );
};

export default ImgList;
