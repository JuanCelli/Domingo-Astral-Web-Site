import React from 'react'
import MainContainer from '../styledComponents/MainContainer.jsx'
import { SectionContainer } from '../components/SectionContainer.jsx'
import { ArticuleContainer } from '../components/ArticuleContainer.jsx'
import SobreMiImage from '../components/SobreMiImage.jsx'
import SobreMiImage2 from '../components/SobreMiImage2.jsx'
import ScrollToTop from '../utils/ScrollToTop.js'

const texts1 = ["Me llamo Zoe. Tengo sol en Leo, luna en Capricornio y ascendente Acuario.",
                "Encontré la astrología cuando necesitaba respuestas, y me dió más preguntas.",
                "Pero de algo estoy (casi) segura: todo lo que nos ocurre afuera, también está sucediendo adentro nuestro.",
                "Lo que sucede en el cielo está en concordancia con lo que nos sucede en la tierra, porque somos un Todo.",
                "Creo en la astrología como puente hacia nuestras profundidades, para entender y conocernos a nosotros mismos aún más.",
                "Dejar de identificarnos con una pequeña parte de nuestro ser, para empezar a apropiarnos de toda esa energía que ya era nuestra, y quizás no sabíamos."
              ]
const texts2 = ["Soy astróloga con enfoque holístico, recibida en la escuela AstroHología.",
                "Actualmente curso la formación de Flores de Bach y Astrología, en la misma escuela.",
                "También soy Reikista. Es una herramienta que me acompaña siempre.",
                "Me encantan las plantas, el mar, el sol. Las lamparas de sal, los caireles y los sahumerios.",
                "Y por supuesto, los domingos a la mañana, de mates en la cama.",
              ]
              


const SobreMi = () => {
  ScrollToTop()

  return (
    <MainContainer>
      <SectionContainer flexDirection="column" justifyContent="center" >
        <SectionContainer width={"70%"} justifyContent="center">

          <ArticuleContainer title="Sobre Mí" marginTop="4rem">
            {texts1}
          </ArticuleContainer>
          <SobreMiImage></SobreMiImage>
        </SectionContainer>
        <SectionContainer width={"70%"} justifyContent="center" ReverseWarp={true}>
          <SobreMiImage2></SobreMiImage2>
          <ArticuleContainer marginTop="-8rem">
            {texts2}
          </ArticuleContainer>

        </SectionContainer>

      </SectionContainer>
    </MainContainer>
  )
}

export default SobreMi