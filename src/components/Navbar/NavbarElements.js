import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background: rgba(22,22,22, 0.85);
  height: 60px;
  display: flex;
  padding: 0.5rem calc((100vw - 1310px) / 2);
  border-top: 4px solid #DC3545;
  z-index: 10;
  font-family: "Poppins", sans-serif;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: rgba(255,255,255,.55);
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;
  
  :hover {
    color: rgba(255,255,255,.75); !important;
  }
  
  &.active {
    color: #fff;
  }
`;

export const NavLogo = styled.img`
  width: 220px;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
