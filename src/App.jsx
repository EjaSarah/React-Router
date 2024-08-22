
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Students from './pages/students/Students';
import CarHire from './pages/services/CarHire';
import CarRepair from './pages/services/CarRepair';
import StudentPreview from './pages/students/StudentPreview';
import Blog from './pages/blog/blog';
import BlogCard from './pages/blog/BlogCard';
import BlogCardPreview from './pages/blog/BlogCardPreview';

function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* nested route..we declared services and passed other services under it */}
      <Route path="/services" element={<Services />}>
      <Route path="CarHire" element={<CarHire />}/>
      <Route path="CarRepair" element={<CarRepair />}/>
      </Route>

      <Route path="/students" element={<Students />} >
      {/* student id here is the params we are passing to get a particular id..this is a dynamov route because we can pass any number to get to  a single  */}
      <Route path=":studentId" element={<StudentPreview />}/>
      </Route>

      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:slug" element={<BlogCardPreview />}/>
      


      
      {/* this is the default page that the user is derected to if they enter a route we dont have defined here */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
    </>


  )
};
export default App;
