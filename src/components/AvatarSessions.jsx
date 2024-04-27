import styled from "styled-components"
import { colors } from "../styled/config"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"



const AvatarImg = styled.img`
    width:${({ size }) => (size ==="small" ? '8rem' : '10rem')};
    height: ${({ size }) => (size ==="small" ? '8rem' : '10rem')};
    object-fit: cover;
    margin-bottom: .75;
    transition: .2s;

    cursor: pointer;

    &:hover{
      transform: scale(1.07);
    }
`
const AvatarTitle = styled.h3`
    font-size: 1.2rem;
    color: ${colors.ArticuleBg1};
`


const AvatarContainer = styled.div`
    display: flex;
    width:${({ size }) => (size ==="small" ? '8rem' : '14rem')};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 2rem;
    padding: 1rem;

    @media (max-width: 1400px) {
      width:${({ size }) => (size ==="small" ? '8rem' : '13rem')};
    }

    @media (max-width: 768px) {
      margin: 0px 0rem;
      width: 12rem;
      ${AvatarImg}{
        width: ${({ size }) => (size ==="small" ? '6rem' : '8rem')};
        height: ${({ size }) => (size ==="small" ? '6rem' : '8rem')};
      };
      ${AvatarTitle}{
        font-size: .9rem;
      }
  }
`

const AvatarLink = styled(HashLink)`
  text-decoration: none;
`



export const AvatarSessions = ({src,title,size,url}) => {
  return (
    <AvatarContainer size={size}>
      <AvatarLink to={url}>
        <AvatarImg src={src} size={size}></AvatarImg>
        <AvatarTitle>{title}</AvatarTitle>
      </AvatarLink>
    </AvatarContainer>
  )
}
