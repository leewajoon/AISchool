import React from 'react';
import styled from 'styled-components';

const BlogBlock = styled.div`
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

const Blog = ({ items }) => {
  const { title, link, description, bloggername, bloggerlink, postdate } =
    items;

  return (
    <BlogBlock>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </a>
      <div className="description">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div>
        <h4>{bloggername}</h4>
      </div>
    </BlogBlock>
  );
};

export default Blog;
