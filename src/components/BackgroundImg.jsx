import styled from "styled-components"
import { colors } from "../../styled/config"

const ImgContainer = styled.div`
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

 

const ImgBackground = styled.img`
  position: absolute;
  object-fit: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* transform: scale(1.1); */
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 100%;
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

  @media (max-width: 768px) {
    top:30%;
    font-size: 2rem;
  }
`


export const BackgroundImg = () => {
  return (
    <ImgContainer>
        <ImgBackground src="\assets\inicio definitivo.jpeg"></ImgBackground>
        <Title>"Como es arriba, es abajo.<br/> Como es adento, es afuera."</Title>
    </ImgContainer>
  )
}
