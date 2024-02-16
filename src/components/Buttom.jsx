import styled from "styled-components"
import { colors } from "../../styled/config"

const ButtonStyled = styled.button`
    font-size: 1.4rem;
    padding: 1rem 2rem;
    background-color: ${colors.buttonBg};
    margin-top: 5rem;
    border: 1px;
    
    border-top-left-radius: 1.2rem;
    border-top-right-radius:  .5rem;
    border-bottom-right-radius: 1.2rem;
    border-bottom-left-radius: .5rem;
    cursor: pointer;
    transition: .2s;
    
    &:hover{
        background-color: ${colors.SectionBg1};

    }

`

export const Buttom = ({children}) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}
