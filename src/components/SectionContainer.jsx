import styled from "styled-components"
import { colors } from "../../styled/config";

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${colors.SectionBg1};
`;

export const SectionContainer = ({children }) => {
  return (
    <Section>
        {children}
    </Section>
  )
}
