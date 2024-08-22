/* eslint-disable react/prop-types */
// src/pages/blog/BlogCard.jsx
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useState } from 'react';
import Button from '../../components/Button';

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const AuthorDate = styled.div`
  font-size: 0.9em;
  color: #aaa;
  margin-bottom: 5px;
`;

const TextContent = styled.p`
  font-size: 1em;
  color: #333;
`;
const BlogCard = ({ title, author, date, content, slug, imageUrl }) => {
const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/blog/${slug}`);
}

  
    // const [isPreview, setIsPreview] = useState(false);

    // const handlePreviewClick = () => {
    //     setIsPreview(!isPreview);
    // }
  return (
    // card here is the wrapper that wraps the entire blogcard
    <Card>
        {/* here we are declaring and listing our props variable that will be in our blog post */}
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <AuthorDate>
          By {author} on {date}
        </AuthorDate>
        <TextContent>
          {content.substring(0, 150)}... 
          </TextContent>

        
        <Button onClick={handleNavigate}>
          Read More
            {/* {isPreview ? 'Hide preview' : 'Preview'} */}
        </Button> 
      </Content>
    </Card>
  );
};

export default BlogCard;
