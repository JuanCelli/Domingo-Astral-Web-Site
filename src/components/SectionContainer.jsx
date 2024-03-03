import styled from "styled-components"
import { colors } from "../../styled/config";

const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    padding: 2em;
    background-color: ${(props) => props.color || colors.SectionBg1};
    overflow: hidden;
`;

const Container = styled.div`
    display: flex;
    flex-direction:${(props) => props.flexDirection || "row"} ;
    justify-content:${(props) => props.justifyContent || "space-around"} ;
    align-items: center;
    /* flex-wrap: wrap; */
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 1260px) {
      width: 100%;
      flex-direction:column;
      align-content: center;
      justify-content: center;
  }
`

export const SectionContainer = ({children, color, flexDirection,justifyContent }) => {
  return (
    <Section color={color}>
      <Container flexDirection={flexDirection} justifyContent={justifyContent}>
        {children}
      </Container>
    </Section>
  )
}
