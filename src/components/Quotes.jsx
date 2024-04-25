import styled from 'styled-components'


const SpanStyled = styled.span`
    width: 2rem;
    filter: invert(51%) sepia(51%) saturate(325%) hue-rotate(156deg) brightness(92%) contrast(91%);
    margin-bottom: .8rem;
    transition: ${timeTransition} ease-in-out;
`




const Span = ({url}) =>{
    return(
        <SpanStyled src={url} alt="" ></SpanStyled>
    )
}

export default Span