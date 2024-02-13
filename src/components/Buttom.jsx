import styled from "styled-components"
import { colors } from "../../styled/config"

const ButtonStyled = styled.button`
    font-size: 30px;
    padding: 20px 40px;
    background-color: ${colors.buttonBg};
    margin-top: 100px;
    border: 1px;
    
    border-top-left-radius: 25px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    transition: .2s;
    
    &:hover{
        background-color: ${colors.SectionBg1};

    }

`

export const Buttom = () => {
  return (
    <ButtonStyled>Buttom</ButtonStyled>
  )
}
