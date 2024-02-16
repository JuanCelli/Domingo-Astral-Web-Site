import styled from "styled-components"

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    overflow: hidden;
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
`;

const Title = styled.h1`
  font-style: italic;
  font-size: 2.6rem;
  position: relative;
  color: white;
  top: 40%;
  justify-self: center;
  z-index: 10;
  margin: 2rem;
`


export const BackgroundImg = () => {
  return (
    <ImgContainer>
        <ImgBackground src="\assets\inicio definitivo.jpeg"></ImgBackground>
        <Title>"Como es arriba, es abajo. Como es adento, es afuera."</Title>
    </ImgContainer>
  )
}
