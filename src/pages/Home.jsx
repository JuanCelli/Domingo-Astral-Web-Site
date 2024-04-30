import React from 'react'
import MainContainer from '../styledComponents/MainContainer.jsx'
import { BackgroundImg } from '../components/BackgroundImg.jsx'
import { SectionContainer } from '../components/SectionContainer.jsx'
import { ArticuleContainer } from '../components/ArticuleContainer.jsx'
import { ProfileImage } from '../components/ProfileImage.jsx'
import TitleSection from '../styledComponents/TitleSection.jsx'
import { DivContainer } from '../components/DivContainer.jsx'
import { AvatarSessions } from '../components/AvatarSessions.jsx'
import { Buttom } from '../components/Buttom.jsx'
import Carousel from '../components/Carousel.jsx'
import { colors } from '../styled/config.js'
import ScrollToTop from '../utils/ScrollToTop.js'




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/styled/Carrousel.css"

const text = ["Me llamo Zoe. Tengo sol en Leo, luna en Capricornio y ascendente Acuario.",
              "Encontré la astrología cuando necesitaba respuestas, y me dió más preguntas.",
              "Pero de algo estoy (casi) segura: todo lo que nos ocurre afuera, también está sucediendo adentro nuestro.",
              "Lo que sucede en el cielo está en concordancia con lo que nos sucede en la tierra, porque somos un Todo.",
              "Creo en la astrología como puente hacia nuestras profundidades, para entender y conocernos a nosotros mismos aún más.",
              "Dejar de identificarnos con una pequeña parte de nuestro ser, para empezar a apropiarnos de toda esa energía que ya era nuestra, y quizás no sabíamos."]

const Home = () => {
  ScrollToTop()

  return (
    <MainContainer>
    <BackgroundImg id="inicio"></BackgroundImg>
    <SectionContainer width="80%" justifyContent="center">
      <ArticuleContainer title="Sobre Mí">
        {text}
      </ArticuleContainer>
      <ProfileImage></ProfileImage>
    </SectionContainer>
    <SectionContainer width="70%" color={colors.SectionBg2} flexDirection="column" justifyContent="center">
      <TitleSection>Sesiones</TitleSection>
      <DivContainer justifyContent="center">
        <AvatarSessions url="/sesiones/#CartaNatal" src="\assets\foto sin fondo.png" title="Carta Natal"></AvatarSessions>
        <AvatarSessions url="/sesiones/#CartaNatalConTransitos" src="\assets\sin fondo 2.png" title="Carta Natal con Tránsitos"></AvatarSessions>
        <AvatarSessions url="/sesiones/#RevolucionSolar" src="\assets\ima sin fondo 2.png" title="Revolución Solar"></AvatarSessions>
        <AvatarSessions url="/sesiones/#SinastriaYCartaCompuesta" src="\assets\IMAGEN SIN FONDO 2.png" title="Sinastría"></AvatarSessions>
        <AvatarSessions url="/sesiones/#Talleres" src="\assets\contacto 5 sin fondo 1.png" title="Talleres"></AvatarSessions>
        <AvatarSessions url="/sesiones/#AcompanamientoAstrologico" src="\assets\contacto 1 sin fondo 1.png" title="Acompañamiento Astrológico"></AvatarSessions>
        <AvatarSessions url="/sesiones/#FloresDeBach" src="\assets\foto flor 2 sin fondo.png" title="Flores de Bach"></AvatarSessions>
      </DivContainer>
      <DivContainer >
        <Buttom src="/sesiones/#root" >Ver más</Buttom>
      </DivContainer>
    </SectionContainer>
      <Carousel></Carousel>


  </MainContainer>
  )
}

export default Home