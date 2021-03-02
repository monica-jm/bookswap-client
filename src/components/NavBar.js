import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 6vw;
  height: 100vh;
  padding: 10px;
  box-shadow: 5px 5px 8px lightgray;
  z-index:2;
  position:fixed;
  `;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavtItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: black;
  font-weight: light;
  padding: 10px;
  font-size: .9rem;
  margin-bottom: 35px;
  width:100%;
  &:hover {
    background-color: Gainsboro;
  }
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #180000;
  padding: 0px 20px;
  &:hover {
    color: Firebrick;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <p>Logo</p>
      </Link>
      <Nav>
        <NavtItem>
          <MenuLink to="/explore">Explore</MenuLink>
        </NavtItem>
        <NavtItem>
          <MenuLink to="/bookmarks">Wish list</MenuLink>
        </NavtItem>
        <NavtItem>
          <MenuLink to="/messages">Swaps</MenuLink>
        </NavtItem>
        <NavtItem>
          <MenuLink to="/profile">Profile</MenuLink>
        </NavtItem>
      </Nav>
      <Button>+</Button>
    </Wrapper>
  );
};

export default NavBar;
