import styled from "@emotion/styled";

export const Header = styled.header``;

export const Title = styled.h1``;

export const Navbar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: #082bff none repeat scroll 0% 0%;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const NavLink = styled.a`
  &.link {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: rgb(2, 2, 2);
    font-size: 18px;
  }

  &.activeLink {
    composes: link;
    color: #008a73;
    font-weight: bolder;
  }
`;
