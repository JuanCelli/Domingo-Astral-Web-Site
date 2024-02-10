import styled from "styled-components"

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    `;

const ImgBackground = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  background-size: cover;
  background-position: center;
`;


export const BackgroundImg = () => {
  return (
    <ImgContainer>
        <ImgBackground src="\assets\inicio definitivo.jpeg"></ImgBackground>
    </ImgContainer>
  )
}
