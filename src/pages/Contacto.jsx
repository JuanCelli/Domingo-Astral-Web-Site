import React from 'react'
import MainContainer from '../styledComponents/MainContainer'
import { SectionContainer } from '../components/SectionContainer'
import TitleSection from '../styledComponents/TitleSection'
import { colors } from '../styled/config'
import styled from 'styled-components'
import ScrollToTop from '../utils/ScrollToTop'


const ImgContact = styled.img`
    object-fit: cover;
    width: 28rem;
    height: 40rem;
    
    @media (max-width: 768px) {
        width: 15rem;
        height: 20rem;
  }
`

const Form = styled.form`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    height: 30rem;

    @media (max-width: 768px) {
        height: 30rem;
  }
`

const Input = styled.input`
    background-color: ${colors.InputContactBg} ;
    border: none;
    color: ${colors.SectionBg1};
    width: 20rem;
    height: 2rem;
    font-size: 1rem;
    border-radius: .3rem;
    padding: .3rem .5rem;
    transition: .2s;
    outline: none;

    &::placeholder {
        color: ${colors.LinkUnHover};
        font-style: italic;
    }

    &:focus {
        border-color:4px ${colors.ArticuleBg1};
        box-shadow: 0 0 7px ${colors.ArticuleBg1};
        outline: none;
        background-color: ${colors.ContactoBg};
        color: ${colors.ArticuleBg1};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        background-color: ${colors.InputContactBg} !important;
        transition: background-color 5000s ease-in-out 0s;
        color: white !important;
    }

    @media (max-width: 768px) {
        width: 100%
  }
`

const TextArea = styled.textarea`
    background-color: ${colors.InputContactBg} ;
    color: ${colors.SectionBg1};
    font-size: 1rem;
    border-radius: .3rem;
    padding: .5rem;
    transition: .2s;
    outline: none;
    max-width: 100%;

    &::placeholder {
        color: ${colors.LinkUnHover};
        font-style: italic;
    }

    &:focus {
        border-color:4px ${colors.ArticuleBg1};
        box-shadow: 0 0 4px ${colors.ArticuleBg1};
        outline: none;
        background-color: ${colors.ContactoBg};
        color: ${colors.ArticuleBg1};
    }
`

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;
    padding-top: 2rem;

    @media (max-width: 1000px) {
        align-items: center;
  }
`

const InputSubmit = styled.input`
    border-radius: .3rem;
    background-color: ${colors.InputContactBg};
    color: ${colors.SectionBg1};
    border: none;
    padding: .7rem 1.2rem;
    font-size: 1.1rem;
    transition: .2s;

    &:hover {
        border-color:4px ${colors.ArticuleBg1};
        box-shadow: 0 0 4px ${colors.ArticuleBg1};
        outline: none;
        background-color: ${colors.ContactoBg};
        color: ${colors.ArticuleBg1};
    }
    @media (max-width: 768px) {
        align-self: center;
  }
`


const Contacto = () => {
    ScrollToTop()

  return (
    <MainContainer>
        <SectionContainer color={colors.ContactoBg} flexDirection="column" justifyContent="center">
            <SectionContainer color={colors.ContactoBg} width={"60%"} justifyContent="space-around" mediaWidth="70%">
                <ContainerForm>

                    <TitleSection>Contacto</TitleSection>
                    <Form action="https://formspree.io/f/mjvnlkvl" method="POST">
                        <Input type="text" name="name" placeholder="Nombre" required />
                        <Input type="email" name="email" placeholder="Tu email" required />
                        <TextArea name="message" rows="15" cols="50" placeholder='Escribe tu consulta aquí...' required></TextArea>
                        <InputSubmit type="submit" value="Enviar" />
                    </Form>
                </ContainerForm>
                <ImgContact  src='/assets/imgContacto.png'></ImgContact>
            </SectionContainer>
        </SectionContainer>
    </MainContainer>
  )
}

export default Contacto