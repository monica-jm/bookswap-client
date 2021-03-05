import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 6vw;
  height: 100vh;
  background-color:#EEEDED;
  box-shadow: 5px 5px 10px rgba(178, 178, 178, .30);
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width:100%;
`;

const NavtItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: gray;
  text-decoration: none;
  font-weight: regular;
  padding: 20px 0px;
  font-size: .8rem;
  margin: 25px 0px;
  &:hover {
    background-color: #E7E6E6;
  }
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #180000;
  &:hover {
    color: gray;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <Nav>
        <NavtItem>
          <MenuLink to="/explore">Explore</MenuLink>
        </NavtItem>
        <NavtItem>
          <MenuLink to="/bookmarks">Bookmarks</MenuLink>
        </NavtItem>
        <NavtItem>
          <MenuLink to="/swaps">Swaps</MenuLink>
        </NavtItem>
        <NavtItem>
          <MenuLink to="/profile">Profile</MenuLink>
        </NavtItem>
      </Nav>
      <Button> Add </Button>
    </Wrapper>
  );
};

export default NavBar;
