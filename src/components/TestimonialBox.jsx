import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styled/config';


const timeTransition = ".3s"

const Text = styled.p`
    font-size: 1rem;
    text-align: center;
    color: ${colors.fontArticules};
    transition: ${timeTransition} ease-in-out;
    `

const Author = styled.h3`
    font-size: 1.1rem;
    text-align: center;
    font-weight: 500;
    color: ${colors.fontArticules};
    transition: ${timeTransition} ease-in-out;

`
const ImgQuotesContainer = styled.div`

`
const ImgQuotes = styled.img`
    width: 2rem;
    filter: invert(51%) sepia(51%) saturate(325%) hue-rotate(156deg) brightness(92%) contrast(91%);
    margin-bottom: .8rem;
    transition: ${timeTransition} ease-in-out;
`




const BoxContainer = styled.div`
    position: absolute;
    display: flex;
    min-height: 35rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-justify: distribute;
    border-radius: 1rem;
    width: 22rem;
    padding: 3rem 3rem;
    background-color: ${(props) => props.color || colors.SectionBg2};
    transition: ${timeTransition} ease-in-out;

    &:hover{
        background-color: ${colors.ArticuleBg1};
    }
    &:hover ${Text}{
        color: ${colors.SectionBg2};
    }
    &:hover ${Author}{
        color: ${colors.SectionBg2};
    }
    &:hover ${ImgQuotes}{
        filter: invert(88%) sepia(43%) saturate(0%) hue-rotate(93deg) brightness(104%) contrast(107%)
    }
`;









const TestimonialBox = ({color, author, text}) => {
  return (
    <BoxContainer color={color}>
        <ImgQuotesContainer>
            <ImgQuotes src="\assets\gratis-png-comillas-comillas-en-ingles-puntuacion-comillas-thumbnail.png" alt="" ></ImgQuotes>
        </ImgQuotesContainer>
        <Text>
            {text}
        </Text>
        <Author>{author}</Author>
    </BoxContainer>
  )
}

export default TestimonialBox