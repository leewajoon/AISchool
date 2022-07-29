import React from 'react';
import styled from 'styled-components';
import { AiFillLike } from 'react-icons/ai';
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

  a {
    text-decoration-line: none;
    color: black;
  }

  h2 {
    color: back;
  }
  span {
  }
  img {
    float: left;
    whith: 300px;
    height: 200px;
    padding: 30px;
  }
  .icon {
    color: red;
    padding-left: 5px;
  }
`;

const Blog = ({ items }) => {
  const { title, link, image, subtitle, pubDate, director, actor, userRating } =
    items;
  return (
    <BlogBlock>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} />
        </a>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </a>

      <span>{subtitle} </span>
      <span> {pubDate}</span>
      <p>감독 : {director}</p>
      <p>출연 : {actor}</p>
      <p>
        평점 : {userRating}
        <AiFillLike className="icon" />
      </p>
    </BlogBlock>
  );
};

export default Blog;
