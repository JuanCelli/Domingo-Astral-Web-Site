import styled from "styled-components"
import { colors } from "../styled/config"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

const ButtonStyled = styled(Link)`
    font-size: 1rem;
    padding: .7rem 1.5rem;
    color: ${colors.SectionBg2};
    background-color: ${colors.ArticuleBg1};
    margin-top: 3rem;
    border: 1px;
    text-decoration: none;
    
    border-top-left-radius: 1rem;
    border-top-right-radius:  .5rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: .5rem;
    cursor: pointer;
    transition: .2s;
    
    &:hover{
        background-color: ${colors.buttonBg};

    }

`

export const Buttom = ({children,src}) => {
  return (
    <ButtonStyled to={src} reloadDocument>{children}</ButtonStyled>
  )
}
