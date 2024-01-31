import styled from "styled-components"
import { colors } from "../../styled/config";

const AriculeContainerStyled = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 800px;
    height: 600px;
    border-radius: 30px;
    /* border: solid 1px black; */
    background-color: ${colors.SectionBg1};
    padding: 30px;
`;

const TitleArticule = styled.h2`
  color: ${colors.ArticuleBg1};
  font-size: 46px;
  margin-bottom:20px;
`

const TextArticule = styled.p`
  font-size: 30px;
  margin: 0;
`

export const ArticuleContainer = ({title,children }) => {
  return (
    <AriculeContainerStyled>
      <TitleArticule>{title}</TitleArticule>
      <TextArticule>
        {children}
      </TextArticule>
      
    </AriculeContainerStyled>
  )
}
