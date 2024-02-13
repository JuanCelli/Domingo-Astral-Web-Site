import styled from "styled-components"
import { colors } from "../../styled/config"

const AvatarImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 15px;
    transition: .3s;

    cursor: pointer;

    &:hover{
      transform: scale(1.05);
    }
`

const AvatarContainer = styled.div`
    display: flex;
    width: 200px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AvatarTitle = styled.h3`
    font-size: 26px;
    color: ${colors.ArticuleBg1};
`

export const AvatarSessions = ({src,title}) => {
  return (
    <AvatarContainer>
        <AvatarImg src={src}></AvatarImg>
        <AvatarTitle>{title}</AvatarTitle>
    </AvatarContainer>
  )
}
