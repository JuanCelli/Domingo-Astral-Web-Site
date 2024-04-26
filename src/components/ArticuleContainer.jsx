import styled from "styled-components"
import { colors } from "../styled/config";

const AriculeContainerStyled = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:50%;
    border-radius: 30px;
    margin-top: ${(props) => props.marginTop || "0rem"};
    padding: 1rem 1rem 5rem;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0rem 0rem 3rem;
      margin-top: 0rem;
  }
`;

const TitleArticule = styled.h2`
  color: ${colors.ArticuleBg1};
  font-size: 2.1rem;
  margin-bottom:20px;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const TextArticule = styled.p`
  color: ${colors.fontArticules};
  font-size: 1.3rem;
  margin: 0;
  margin: 0 0 1.5rem 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ArticuleContainer = ({title,children, marginTop}) => {
  return (
    <AriculeContainerStyled marginTop={marginTop}>
      {title?<TitleArticule>{title}</TitleArticule>:<></>}
      {children.map(text=><TextArticule key={text}>{text}</TextArticule>)}
    </AriculeContainerStyled>
  )
}
