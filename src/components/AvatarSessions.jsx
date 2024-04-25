import styled from "styled-components"
import { colors } from "../styled/config"

const AvatarImg = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    margin-bottom: .75;
    transition: .3s;

    cursor: pointer;

    &:hover{
      transform: scale(1.05);
    }
`
const AvatarTitle = styled.h3`
    font-size: 1.2rem;
    color: ${colors.ArticuleBg1};
`

const AvatarContainer = styled.div`
    display: flex;
    width: 14rem;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 2rem;
    padding: 1rem;

    @media (max-width: 768px) {
      margin: 0px 0rem;
      width: 12rem;
      ${AvatarImg}{
        width: 8rem;
        height: 8rem;
      };
      ${AvatarTitle}{
        font-size: .9rem;
      }
  }
`



export const AvatarSessions = ({src,title}) => {
  return (
    <AvatarContainer>
        <AvatarImg src={src}></AvatarImg>
        <AvatarTitle>{title}</AvatarTitle>
    </AvatarContainer>
  )
}
