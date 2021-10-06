import React, { useRef, useContext } from "react";
import { Header, Navbar, Title, MenuLink } from "./MainMenu.styled";
import styled, { css } from "styled-components";
import useOnClickOutside from "../../hooks/onClickOutside";
import { MenuContext } from "../../context/navState";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { NavLink } from "react-router-dom";

const Menu = styled.nav`
  position: absolute;
  top: 80px;
  left: 0px;
  bottom: 0px;
  z-index: 1;
  display: block;
  width: 400px;
  height: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #001698;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <Header ref={node}>
      <Navbar>
        <HamburgerButton />
        <NavLink exact to="/" className={("link", "activeLink")}>
          <Title>Home</Title>
        </NavLink>

        <Menu open={isMenuOpen} className={("link", "activeLink")}>
          <NavLink to="/todoform">
            <MenuLink>create todo form</MenuLink>
          </NavLink>

          <NavLink to="/todos" className={("link", "activeLink")}>
            <MenuLink>todos</MenuLink>
          </NavLink>
        </Menu>
      </Navbar>
    </Header>
  );
};

export default MainMenu;
