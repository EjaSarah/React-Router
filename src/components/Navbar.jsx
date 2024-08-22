import { NavLink } from "react-router-dom"
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #333;
color: white;
padding: 1rem 0;

ul {
display: flex;
justify-content: center;
gap: 1rem;
list-style: none;
}

a {
color: white;
text-decoration: none;
}

a:hover{
color: blue;
border-bottom: 2px solid orange;

}

.active{
border-bottom: 2px solid yellow;
color: gray;
}
`;
const Navbar = () => {
    return(
        <Wrapper>
    
            <ul>
                <li>
                    {/* you can only style the navlink not the link */}
                <NavLink activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/services">Services</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/students">Students</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/blog">Blog</NavLink>
                </li>

            </ul>
    </Wrapper>
    );
};

export default Navbar;