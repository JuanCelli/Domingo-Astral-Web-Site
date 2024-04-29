import React from 'react'
import styled from 'styled-components'
import { colors } from '../styled/config'


const Title = styled.h2`
    font-size: 2.2rem;
    color:${({ color }) => color ? color : colors.ArticuleBg1};
    margin-bottom: 3rem;
`

const TitleSection = ({children,color}) => {
  return (
    <Title color={color}>{children}</Title>
  )
}

export default TitleSection