import React from 'react';
import styled from 'styled-components';

const CafeBlock = styled.div`
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

const Cafe = ({ items }) => {
  const { title, link, description, cafename, cafeurl } = items;
  return (
    <CafeBlock>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </a>
      <div className="description">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div>
        <h4>{cafename}</h4>
        <span>
          <a href={cafeurl} target="_blank" rel="noopener noreferrer">
            {cafeurl}
          </a>
        </span>
      </div>
    </CafeBlock>
  );
};

export default Cafe;
