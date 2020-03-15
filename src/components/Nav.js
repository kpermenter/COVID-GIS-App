// React imports
import React from "react";

// Component imports
import TopNav from "calcite-react/TopNav";
import TopNavBrand from "calcite-react/TopNav/TopNavBrand";
import TopNavTitle from "calcite-react/TopNav/TopNavTitle";
import TopNavList from "calcite-react/TopNav/TopNavList";
import TopNavLink from "calcite-react/TopNav/TopNavLink";
// import logo from "../styles/images/logo.png";
import { useSelector, useDispatch } from "react-redux";

// Styled Components
import styled from "styled-components";
import "../styles/index.css"

// const Logo = styled(TopNavBrand)`
//   justify-content: center;
//   & img {
//     height: 55px;
//   }
// `;

const Nav = styled(TopNav)`
  && {
    z-index: 5;
  }
`;

const NavList = styled(TopNavList)`
  text-align: left;
`;

// Component definition
const Navbar = props => {
  const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
  const dispatch = useDispatch();

  return (
      <Nav>
        {/* <Logo href="#" src={logo} /> */}
        <TopNavTitle>COVID-19 Tracker</TopNavTitle>
        <NavList>
          {/* <TopNavLink href="">
            {/*  */}
          {/* </TopNavLink> */}
        </NavList>
      </Nav>
  )};

export default Navbar;