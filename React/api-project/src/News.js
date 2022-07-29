import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const NewsBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  max-width: 100%;
  height: auto;
  border: 3px solid #eaeaea;
  padding: 0px;

  h2 {
    color: black;
  }
`;

const News = ({ items }) => {
  const { title, link, description, originallink, pubDate } = items;
  const publicDate = moment(pubDate).format('YYYY-MM-DD');
  return (
    <NewsBlock>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </a>
      <div className="description">
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <p dangerouslySetInnerHTML={{ __html: link }} />
        <p dangerouslySetInnerHTML={{ __html: publicDate }} />
      </div>
    </NewsBlock>
  );
};

export default News;
