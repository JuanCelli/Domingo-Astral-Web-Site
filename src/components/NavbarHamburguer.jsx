import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styled/config';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
    position: fixed;
    height:${({ color }) =>  color ? "90px" : "130px"};
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${({ color }) => color ? colors.Navbar : colors.NavbarTrasparent};
    overflow: hidden;
    z-index: 10;
    padding:0rem .75rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.4s ease-out;

    @media (max-width: 768px) {
      justify-content:center;
      width: 100%;
  }
`;

const LogoImg = styled.img`
    object-fit: cover;
    width: 6rem;
    height: 5rem;
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
  font-weight: 500;
  color: ${colors.fontArticules};
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
  const [color, setColor] = useState(false)

  const changeColor = () =>{
    if (window.scrollY>=130){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color={color}>
      <MenuIcon onClick={toggleMenu}>
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
      </MenuIcon>
      <LogoContainer>
            <LogoImg src="\assets\Logo.png"></LogoImg>
        </LogoContainer>
      <NavLinks isOpen={isOpen}>
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/sobremi">Sobre Mí</NavLink>
        <NavLink href="#">Sesiones</NavLink>
        <NavLink href="#">Contacto</NavLink>
        <NavLink href="#">Novedades</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Navigation;
