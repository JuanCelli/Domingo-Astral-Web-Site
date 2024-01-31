import styled from "styled-components";
import { colors } from "../../styled/config";



const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${colors.Navbar};
    padding:0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
`;

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0 50px;
    display: flex;

`;

const NavItem = styled.li`
  margin-right: 15px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size:25px;
  padding:0px 30px;
  transition: .15s;

  &:hover {
    color: white;
  }
`;
const LogoContainer = styled.div`
    display: flex;
    padding: 0px 50px;
`;
const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`;

const Navbar = () => {
    return (
      <NavContainer>
        <LogoContainer>
            <LogoImg src="src\assets\foto sin fondo.png"></LogoImg>
        </LogoContainer>

        <NavList>
          <NavItem>
            <NavLink href="#inicio">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#acerca">Sobre Mí</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#servicios">Sesiones</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contacto">Contacto</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contacto">Novedades</NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    );
  };

  export default Navbar