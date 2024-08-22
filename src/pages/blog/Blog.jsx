import styled from 'styled-components';
// blog.jsx is where we are displaying our blogpost

// we imported mockdata from our utils which has our blogpost mock data
import blogPost from '../../utils/mockData';
// blogcard has all of our styling and our props
import BlogCard from './BlogCard';


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Blog = () => {
    // console.log('blogPost', blogPost)
  return (
    <GridContainer>
       {/* here we are mapping the blog post we got from our mockdata and we call it blog in the map */}
    {blogPost.map(blog => (
   <BlogCard
   key={blog.id}
   title={blog.title}
   author={blog.author}
   date={blog.date}
   content={blog.content}
   slug={blog.slug}
   imageUrl={blog.imageUrl}
 />
    ))}
     
     </GridContainer>
  );
};

export default Blog;
