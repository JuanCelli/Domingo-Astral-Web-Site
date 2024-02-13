import styled from "styled-components"
import { colors } from "../../styled/config";

const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.color || colors.SectionBg1};
`;

const Container = styled.div`
    display: flex;
    flex-direction:${(props) => props.flexDirection || "row"} ;
    justify-content:${(props) => props.justifyContent || "space-between"} ;
    align-items: center;
    flex-wrap: wrap;
    width: 75%;
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
