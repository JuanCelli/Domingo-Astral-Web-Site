import styled from "styled-components"
import { colors } from "../../styled/config";

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.color || colors.SectionBg1};
`;

export const SectionContainer = ({children, color }) => {
  return (
    <Section color={color}>
        {children}
    </Section>
  )
}
