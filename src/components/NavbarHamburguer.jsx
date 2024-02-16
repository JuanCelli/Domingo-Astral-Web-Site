import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styled/config';

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${colors.Navbar};
    overflow: hidden;
    z-index: 5;
    padding:0rem .75rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      justify-content:center;
      width: 100%;
  }
`;

const LogoImg = styled.img`
    width: 4rem
`;
const LogoContainer = styled.div`
    display: flex;
    padding: 0rem 2rem;

    @media (max-width: 768px) {
      display: none;
      height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
      overflow: hidden;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  &:hover {
    color: lightgray;
  }
`;

const MenuIcon = styled.div`
  display: none;
  z-index: 6;

  @media (max-width: 768px) {
    color: red;
    display: block;
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 5;
  }
`;

const Burger = styled.div`
  width: 25px;
  height: 3px;
  z-index: 5;
  background-color: white;
  margin: 5px 0;
  transition: transform 0.3s ease;

  &:nth-child(1) {
    ${({ isOpen }) => isOpen && 'transform: rotate(45deg) translate(5px, 5px);'}
  }
  &:nth-child(2) {
    ${({ isOpen }) => isOpen && 'opacity: 0;'}
  }
  &:nth-child(3) {
    ${({ isOpen }) =>
      isOpen && 'transform: rotate(-45deg) translate(8px, -8px);'}
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <MenuIcon onClick={toggleMenu}>
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
      </MenuIcon>
      <LogoContainer>
            <LogoImg src="\assets\foto sin fondo.png"></LogoImg>
        </LogoContainer>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#">Inicio</NavLink>
        <NavLink href="#">Sobre Mí</NavLink>
        <NavLink href="#">Sesiones</NavLink>
        <NavLink href="#">Contacto</NavLink>
        <NavLink href="#">Novedades</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Navigation;
