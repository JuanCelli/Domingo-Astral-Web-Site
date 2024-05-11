import styled from "styled-components"
import { colors } from "../styled/config"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link'



const ImgContainer = styled.div`
    background-image: url("/assets/inicio definitivo.jpeg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 100vh;
  }
    `;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color:${colors.SectionBg1};
  color:${colors.ArticuleBg1};
  transition: .3s ease-in-out;
  transform: rotate(180deg)
`


const ContainerArrowUp = styled.div`
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position:absolute;
  right: 50%;
  bottom: 7rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  background-color: ${colors.SectionBg2};
  border-color:4px ${colors.ArticuleBg1};
  transition: .3s ease-in-out;
  animation: 1.5s ease-in-out 1s infinite alternate moveArrow;
  
  &:hover {
    background-color: ${colors.ArticuleBg1};
      box-shadow: 0 0 4px ${colors.SectionBg1};

      ${FontAwesomeIconStyled}{
          color:${colors.SectionBg1};
      }
  }

  @keyframes moveArrow {
    to{
      bottom: 5rem;
    }
  }
`


const Title = styled.h1`
  font-style: italic;
  font-size: 3rem;
  font-weight: 500;
  position: relative;
  color: ${colors.SectionBg3} ;
  top: 40%;
  justify-self: center;
  z-index: 5;
  margin: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    top:30%;
    font-size: 2rem;
  }

  animation: 1.2s ease-in-out reverse showTitle;
  @media (max-width: 768px) {
    animation: 1.2s ease-in-out reverse showTitleResponsive;
  }

  @keyframes showTitle {
    to{
      opacity: 0;
      top: 45%;
    }
  }
  @keyframes showTitleResponsive {
    to{
      opacity: 0;
      top: 35%;
    }
  }
`


export const BackgroundImg = () => {
  return (
    <ImgContainer>
      <Title>
          Como es arriba, es abajo.<br/> Como es adentro, es afuera.
      </Title>
      <HashLink to="#sobremi" >
          <ContainerArrowUp>
                  <FontAwesomeIconStyled icon={faArrowUp} />
          </ContainerArrowUp>
      </HashLink>

    </ImgContainer>
  )
}
