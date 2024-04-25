import styled from "styled-components"
import { colors } from "../styled/config"

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


const Title = styled.h1`
  font-style: italic;
  font-size: 3rem;
  font-weight: 500;
  position: relative;
  color: ${colors.SectionBg3} ;
  top: 40%;
  /* top:10%; */
  justify-self: center;
  z-index: 5;
  margin: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    top:30%;
    font-size: 2rem;
  }
`


export const BackgroundImg = () => {
  return (
    <ImgContainer>
          <Title>
              Como es arriba, es abajo.<br/> Como es adentro, es afuera.
          </Title>
    </ImgContainer>
  )
}
