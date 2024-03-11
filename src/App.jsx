import { colors } from '../styled/config'
import './App.css'
import { ArticuleContainer } from './components/ArticuleContainer.jsx'
import { AvatarSessions } from './components/AvatarSessions'
import { BackgroundImg } from './components/BackgroundImg'
import { ProfileImage } from './components/ProfileImage'
import MainContainer from './styledComponents/MainContainer'
import { Buttom } from './components/Buttom.jsx'
import { DivContainer } from './components/DivContainer.jsx'
import Navigation from './components/NavbarHamburguer.jsx'
import {SectionContainer} from './components/SectionContainer.jsx'
import TestimonialContainer from './components/TestimonialContainer.jsx'
import TitleSection from './styledComponents/TitleSection.jsx'
import ArrowUp from './components/ArrowUp.jsx'
import Carousel from './components/Carousel.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  return (
    <>
      <MainContainer>
        <Navigation></Navigation>
        <BackgroundImg id="inicio"></BackgroundImg>
        <SectionContainer justifyContent="center">
          <ArticuleContainer title="Sobre Mí">
            Me llamo Zoe. Tengo sol en Leo, luna en Capricornio y ascendente Acuario.
            Encontré la astrología cuando necesitaba respuestas, y me dió más preguntas.
            Pero de algo estoy (casi) segura: todo lo que nos ocurre afuera, también está sucediendo adentro nuestro.
            Lo que sucede en el cielo está en concordancia con lo que nos sucede en la tierra, porque somos un Todo.
            Creo en la astrología como puente hacia nuestras profundidades, para entender y conocernos a nosotros mismos aún más.
            Dejar de identificarnos con una pequeña parte de nuestro ser, para empezar a apropiarnos de toda esa energía que ya era nuestra, y quizás no sabíamos.
          </ArticuleContainer>
          <ProfileImage></ProfileImage>
        </SectionContainer>
        <SectionContainer color={colors.SectionBg2} flexDirection="column" justifyContent="center">
          <TitleSection>Sesiones</TitleSection>
          <DivContainer justifyContent="center">
            <AvatarSessions src="\assets\foto sin fondo.png" title="Carta Natal"></AvatarSessions>
            <AvatarSessions src="\assets\sin fondo 2.png" title="Carta Natal con Tránsitos"></AvatarSessions>
            <AvatarSessions src="\assets\ima sin fondo 2.png" title="Revolución Solar"></AvatarSessions>
            <AvatarSessions src="\assets\IMAGEN SIN FONDO 2.png" title="Sinastría"></AvatarSessions>
            <AvatarSessions src="\assets\contacto 5 sin fondo 1.png" title="Talleres"></AvatarSessions>
            <AvatarSessions src="\assets\contacto 1 sin fondo 1.png" title="Acompañamiento Astrológico"></AvatarSessions>
            <AvatarSessions src="\assets\foto flor 2 sin fondo.png" title="Flores de Bach"></AvatarSessions>
          </DivContainer>
          <DivContainer >
            <Buttom>Ver más</Buttom>
          </DivContainer>
        </SectionContainer>
        {/* <SectionContainer flexDirection="column" justifyContent="center">
          <TitleSection>Testimonios</TitleSection>
          <TestimonialContainer></TestimonialContainer>
        </SectionContainer> */}

          <Carousel></Carousel>

      </MainContainer>
      <ArrowUp></ArrowUp>

    </>
  )
}

export default App
