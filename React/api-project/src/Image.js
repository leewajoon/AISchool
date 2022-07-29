import React from 'react';
import styled from 'styled-components';

const ImageBlock = styled.div`
  box-sizing: border-box;
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  max-width: 100%;
  height: auto;
  border: 3px solid #eaeaea;
  padding: 0px;

  a {
    text-decoration-line: none;
    color: black;
    text-align: center;
  }

  h2 {
    color: back;
  }
  span {
  }
  .thumbnail {
    text-align: center;
  }
  .contents {
    text-align: center;
  }
  img {
    width: auto;
    max-height: 400px;
  }
`;

const Image = ({ items }) => {
  const { title, link, thumbnail } = items;
  const titles = title.replace(/<b>/g, '').replace(/<\/b>/g, '');

  return (
    <ImageBlock>
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
    </ImageBlock>
  );
};

export default Image;
