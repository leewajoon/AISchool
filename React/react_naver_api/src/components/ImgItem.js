import React from 'react';
import styled from 'styled-components';

const ImgItemBlock = styled.div`
  display: block;

  .thumbnail {
    margin-right: 1rem;
    img {
      position: center;
      display: block;
      width: 760px;
      height: 430px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: blue;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const ImgItem = ({ article }) => {
  const { title, link, thumbnail } = article;
  return (
    <ImgItemBlock>
      {thumbnail && (
        <div className="thumbnail">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={link} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      </div>
    </ImgItemBlock>
  );
};

export default ImgItem;
