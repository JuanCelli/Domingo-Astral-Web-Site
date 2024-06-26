import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styled/config';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Item from './ItemLinkContact';
import { NavLink, useLocation } from 'react-router-dom';
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
      flex-direction: column ;
      background-color: ${colors.Navbar};
      justify-content:center;
      width: 100%;
      height: ${({ isOpen }) => (isOpen ? '100%' : 'auto')};
      overflow-y: hidden;
  }
`;

const LogoImg = styled.img`
    object-fit: cover;
    width: 7rem;
    height: 6rem;
`;
const LogoContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;


    width: 5.5rem;
    height: 5.5rem;
    margin: 0rem 2rem;
    ${({ isHome }) => (isHome ? '' : `background-color: ${colors.Navbar}`  )};
    transition: 0.5s;

    &:hover{
      ${({ color }) => (color ? '' : `box-shadow: 0px 0px 0.5rem ${colors.ArticuleBg1};`)};
    }

    @media (max-width: 768px) {
      ${({ isOpen }) => (isOpen ? 'position:relative' : 'display:none')};
      position: ${({ isOpen }) => (isOpen ? 'absolute' : 'none')};
      top: 5px;
      left: -25px;
  }
`;

const NavLinks = styled.div`
  padding: 8rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding-top: 8rem;
    padding-bottom: 22rem;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
    /* z-index: 15; */
  }
`;

const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  color: ${({ location,to,color,isHome }) => location.split("/")[1]===to.split("/")[1] ? (color  ? colors.SectionBg1 : (isHome? colors.SectionBg1:colors.ArticuleBg1)) : colors.NavLink};

  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  transition: .1s ease-in-out;

  &:hover {
    color: ${({ isHome }) => isHome ? colors.SectionBg1 : colors.ArticuleBg1};
    color: ${({ color }) => color ? colors.SectionBg1 : ""};
  }

  @media (max-width: 768px) {
    &:hover {
    color: ${colors.SectionBg1};
  }
  }


`;

const ContactNavbar = styled.div`
  display: ${({ isOpen }) => isOpen ? "flex" : "none"};
  
  @media (max-width: 768px) {
    width: 12rem;
    justify-content: space-around;
    position: absolute;
    bottom: 10rem;
  }
`

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
  const [color, setColor] = useState(false);
  const [isHome, setIsHome] = useState(false)
  const location = useLocation()


  const changeColor = () =>{
    if (window.scrollY>=130){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  useEffect(()=>{
    if(location.pathname==="/"){
      setIsHome(true)
    }else{
      setIsHome(false)
    }
  },[location])

  window.addEventListener("scroll", changeColor)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setCloseMenu = () => {
    setIsOpen(false);
  };

  

  return (
    <Navbar color={color}>
      <MenuIcon onClick={toggleMenu}>
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
        <Burger isOpen={isOpen} />
      </MenuIcon>
      <LogoContainer color={color} isHome={isHome} to='/' reloadDocument={true} isOpen={isOpen}>
            <LogoImg src="\assets\Logo.png"></LogoImg>
        </LogoContainer>
      <NavLinks isOpen={isOpen}>
        <NavLinkStyled location={location.pathname} color={color} isHome={isHome} onClick={setCloseMenu} to="/">Inicio</NavLinkStyled>
        <NavLinkStyled location={location.pathname} color={color} isHome={isHome} onClick={setCloseMenu} to="/sobremi">Sobre Mí</NavLinkStyled>
        <NavLinkStyled location={location.pathname} color={color} isHome={isHome} onClick={setCloseMenu} to="/sesiones">Sesiones</NavLinkStyled>
        <NavLinkStyled location={location.pathname} color={color} isHome={isHome} onClick={setCloseMenu} to="/contacto">Contacto</NavLinkStyled>
        <NavLinkStyled location={location.pathname} color={color} isHome={isHome} onClick={setCloseMenu} to="/novedades">Novedades</NavLinkStyled>
      </NavLinks>



      <ContactNavbar isOpen={isOpen}>
        <Item color={colors.fontArticules} icon={<InstagramIcon fontSize="medium" />} url="https://www.instagram.com/domingo.astral/" />
        <Item color={colors.fontArticules} icon={<WhatsAppIcon fontSize="medium" />} url="https://wa.me/5401167911122" />
        <Item color={colors.fontArticules} icon={<MailOutlineIcon fontSize="medium" />} url="mailto:domingoastrall@gmail.com" />
      </ContactNavbar>
    </Navbar>
  );
};

export default Navigation;
