import styled from "styled-components"
import MainContainer from "../styledComponents/MainContainer"
import { SectionContainer } from "../components/SectionContainer"
import { ArticuleContainer } from "../components/ArticuleContainer"
import { colors } from "../styled/config"
import { AvatarSessions } from "../components/AvatarSessions"

const textsCartaNatal = ["Es como si le sacaramos una foto al cielo en el momento exacto que naciste. Esto nos brinda un mapa energético, el cual es único para cada persona y nos acompaña toda la vida. ",
                "La carta natal nos ayuda a conocernos en profundidad, descubrir qué tipo de energía tenemos más, o se nos da natural, y cuáles tenemos que seguir aprendiendo. Nos brinda herramientas para entedernos y ser mas amorosos con nosotros mismos y las cosas que nos suceden. Todo lo que nos pasa nos corresponde, lo que nos ocurre afuera tambien esta ocurriendonos adentro.  Como es adentro, es afuera.",
                "No es que los astros inlfuyen en los humanos, sino que podemos entender la astrología como una cooncordancia entre lo que pasa en el cielo y lo que nos pasa a nosotros en la tierra. Como es arriba, es abajo. ",
                "A partir de la carta natal podemos descubrir nuestros patrones inconscientes para traerlos a la consciencia, y asi poder trabajar con ellos, integrando partes nuestras que no sabiamos que nos pertenecian. Volver a apropiarnos conscientemente de algo que ya era nuestro. Dinámicas de luz y sombra.",
                "Una astrología con enfoque Holístico, psicológico, transpersonal y vincular. Dejando de lado la predicción que interfiere y condiciona las decisiones personales."
              ]
const textsCartaNatalConTransitos = ["La carta natal es la foto al cielo que deja congelados los planetas como estaban al momento de tu nacimiento. Pero esos planetas están en constante movimiento.  Los tránsitos nos muestran el movimiento actual de los planetas sobre nuestra carta natal. Son los desplazamientos planetarios actuales activando nuestra energía de nacimiento.",
                "Ver los tránsitos actuales en nuestra carta natal nos ayuda a comprender los momentos que estamos atravesando en la vida."
              ]
const textsRevolucionSolar = ["Es la carta astrológica de tu año. Como sacarle una foto al cielo pero cuando cumpliste años.",
                "Los planetas estan en constante movimiento, y cada año varia tu carta de Revolución Solar, a diferencia de la Natal que es siempre la misma.",
                "Sin carta natal no hay carta Solar. Siempre vamos a partir de la carta natal, y trabajar tambien con los transitos actuales a tu carta, para entender en que contexto sucede esa revolucion solar, ya que solo dura 1 año, pero hay tránsitos que vienen acompañandonos hace tiempo. Esto nos puede ayudar a entender mucho más lo que nos esta sucediendo actualemente y darnos cuenta qué herramientas tenemos para atravesar esos desafíos.",
                "¿Para qué sirve hacerme esta carta? Para conocer qué tipo de energías estarán más disponibles ese año para vos y qué aprendizajes van a estar presentes. El enfoque que le vamos a dar es descubrir cuáles son los temas por los que la identidad está desafiada a actualizarse durante el lapso de un año. La idea no es predecir el futuro.",
                "Si paso tu cumpleaños y no la hiciste, todavía hay tiempo! Podes hacerla en cualquier momento de tu año, cuanto más pase el tiempo, más vas a ir sintiendo la energia de ese año.",
            ]
const textsAcompanamientoAstrologico = ["La idea es acompañarte en el proceso que estes atravesando actualmente, a partir de tu propia carta natal y los transitos actuales a esta. ",
                "Seran 4 sesiones que nos dan la posibilidad de trabajar en profundidad y entrar más en confianza. Para poder abrir esas cosas que estan escondidas más adentro.",
                "Aprenderas mucho sobre vos y esto siempre se ve reflejado en el afuera, en tu vida. Cuanto más trabajo adentro, más cambia el afuera.",
                "Al conocerte más en profundidad te daras cuenta todas las herramientas que tenes disponibles para usar.",
                "Descubrir nuestros patrones inconscientes para traerlos a la consciencia, y asi poder trabajar con ellos, integrando partes nuestras que no sabiamos que nos pertenecian. Volver a apropiarnos conscientemente de algo que ya era nuestro.",
            ]

const textMuyPronto = ["Muy Pronto!"]

const ImgSesiones = styled.img`
    object-fit: cover;
    width: 22rem;
    height: 22rem;
    margin-right:6rem;

    @media (max-width: 768px) {
    width: 16rem;
    height: 16rem;
    margin-right:0;
    }
`
AvatarSessions



const SectionAvatars = styled.section`
    background-color: ${colors.SectionBg2} ;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`

const ContainerAvatars = styled.div`
    margin-top: 10rem;
    flex-wrap: nowrap;
    width: 90%;
    background-color: ${colors.SectionBg2} ;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1000px){
        flex-wrap: wrap;
    }


`

const Sesiones = () => {
  return (
    <MainContainer >
        <SectionAvatars>
            <ContainerAvatars>
                <AvatarSessions url="/sesiones/#CartaNatal" size="small" src="\assets\foto sin fondo.png" title="Carta Natal"></AvatarSessions>
                <AvatarSessions url="/sesiones/#CartaNatalConTransitos" size="small" src="\assets\sin fondo 2.png" title="Carta Natal con Tránsitos"></AvatarSessions>
                <AvatarSessions url="/sesiones/#RevolucionSolar" size="small" src="\assets\ima sin fondo 2.png" title="Revolución Solar"></AvatarSessions>
                <AvatarSessions url="/sesiones/#SinastriaYCartaCompuesta" size="small" src="\assets\IMAGEN SIN FONDO 2.png" title="Sinastría"></AvatarSessions>
                <AvatarSessions url="/sesiones/#AcompanamientoAstrologico" size="small" src="\assets\contacto 1 sin fondo 1.png" title="Acompañamiento Astrológico"></AvatarSessions>
                <AvatarSessions url="/sesiones/#Talleres" size="small" src="\assets\contacto 5 sin fondo 1.png" title="Talleres"></AvatarSessions>
                <AvatarSessions url="/sesiones/#FloresDeBach" size="small" src="\assets\foto flor 2 sin fondo.png" title="Flores de Bach"></AvatarSessions>

            </ContainerAvatars>
        </SectionAvatars>

        
        <SectionContainer id="CartaNatal" color={colors.SectionBg2} flexDirection="column" justifyContent="center" >

            <SectionContainer color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\foto sin fondo.png" />
                <ArticuleContainer title="Carta Natal">
                    {textsCartaNatal}
                </ArticuleContainer>
            </SectionContainer>

            <SectionContainer id="CartaNatalConTransitos" color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\sin fondo 2.png" />
                <ArticuleContainer title="Carta Natal con Tránsitos" marginTop="4rem">
                    {textsCartaNatalConTransitos}
                </ArticuleContainer>
            </SectionContainer>

            <SectionContainer id="RevolucionSolar" color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\ima sin fondo 2.png" />
                <ArticuleContainer title="Revolución Solar" marginTop="4rem">
                    {textsRevolucionSolar}
                </ArticuleContainer>
            </SectionContainer>

            <SectionContainer id="SinastriaYCartaCompuesta" color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\IMAGEN SIN FONDO 2.png" />
                <ArticuleContainer title="Sinastría y Carta Compuesta" marginTop="4rem">
                    {textMuyPronto}
                </ArticuleContainer>
            </SectionContainer>

            <SectionContainer id="AcompanamientoAstrologico" color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\contacto 1 sin fondo 1.png" />
                <ArticuleContainer title="Acompañamiento Astrológico" marginTop="4rem">
                    {textsAcompanamientoAstrologico}
                </ArticuleContainer>
            </SectionContainer>

            <SectionContainer id="Talleres" color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\contacto 5 sin fondo 1.png" />
                <ArticuleContainer title="Talleres" marginTop="4rem">
                    {textMuyPronto}
                </ArticuleContainer>
            </SectionContainer>

            <SectionContainer id="FloresDeBach" color={colors.SectionBg2} width={"80%"} justifyContent="center">
                <ImgSesiones src="\assets\foto flor 2 sin fondo.png" />
                <ArticuleContainer title="Flores de Bach" marginTop="4rem">
                    {textMuyPronto}
                </ArticuleContainer>
            </SectionContainer>
        </SectionContainer>
    </MainContainer>
  )
}

export default Sesiones