import styled from "styled-components"

const DivStyled = styled.div`
    display: flex;
    width: 80%;
    justify-content:${(props) => props.justifyContent || "center"};
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1900px) {
      width: 95%;

  }


    /* @media (max-width: 600px) {
      flex-direction: column;
      align-content: center;

  } */
`

export const DivContainer = ({children,justifyContent}) => {
  return (
    <DivStyled justifyContent={justifyContent}>
        {children}
    </DivStyled>
  )
}
