import styled from "styled-components"
import { colors } from "../../styled/config"

const AvatarImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 20px;
`

const AvatarContainer = styled.div`
    display: flex;
    width: 300px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AvatarTitle = styled.h3`
    font-size: 30px;
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
