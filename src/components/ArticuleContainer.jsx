import styled from "styled-components"
import { colors } from "../../styled/config";

const AriculeContainerStyled = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:50%;
    border-radius: 30px;
    /* border: solid 1px black; */
    /* background-color: ${colors.SectionBg1}; */
    /* padding: 1rem; */
    padding: 1rem 1rem 5rem;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0rem 0rem 5rem;
  }
`;

const TitleArticule = styled.h2`
  color: ${colors.ArticuleBg1};
  font-size: 2.2rem;
  margin-bottom:20px;
`

const TextArticule = styled.p`
  color: ${colors.fontArticules};
  font-size: 1.5rem;
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
