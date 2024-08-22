import { useParams } from "react-router-dom";
import blogPost from "../../utils/mockData";
import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
`;

const BlogPreview = () => {
  const { slug } = useParams();
  const blog = blogPost.find((p) => p.slug === slug);
//   console.log("blog", blog);
const navigate = useNavigate();

const handleNavigate = () => {
  navigate(-1);
}

  if (!blog) return <div>Blog not found</div>;

 

  return (
    <Container>
      <Image src={blog.imageUrl} alt={blog.title} />
      <Content>
        <Title>{blog.title}</Title>
        <Description>{blog.content}</Description>
      </Content>
      <Button onClick={handleNavigate}>
        Back
      </Button>
    </Container>
  );
};

export default BlogPreview;