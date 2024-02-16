import styled from "styled-components"

const DivStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content:${(props) => props.justifyContent || "center"};
    align-items: center;


    @media (max-width: 992px) {
      flex-direction: column;

  }
`

export const DivContainer = ({children,justifyContent}) => {
  return (
    <DivStyled justifyContent={justifyContent}>
        {children}
    </DivStyled>
  )
}
