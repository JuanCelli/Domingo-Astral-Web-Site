import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialBox from "./TestimonialBox";
import { colors } from "../styled/config";
import TitleSection from "../styledComponents/TitleSection";

const StyledSlider = styled(Slider)`
    max-width: 100%;
    `

const ContainerCarousel = styled.div`
    box-sizing: border-box;
    padding: 4rem 0px;
    background-color: ${colors.SectionBg1};
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const testimonialData = [
    {
        author:"Angela",
        text:"Conocí a Zoe a través de una amiga y me leyó la revolución solar. Recomiendo mucho hacer lecturas con ella, sabe muchísimo por lo que sus explicaciones son muy claras y fáciles de entender, incluso sin saber mucho de astrología. Además se nota que complementa con otros saberes, y como es una persona muy empática y perceptiva las lecturas con ellas resultan un espacio super ameno y cuidado. La super recomiendo!"
    },
    {
        author:"Vanina",
        text:"Zoe gracias por  la  lectura de mi carta natal,  por ayudarme a través de ella a crecer interiormente y a percibir mejor lo q sucede a mí alrededor. Realmente lo necesitaba. Y hoy  a meses de haberla realizado,  veo como fluye mí vida sin trabas mentales."
    },
    {
        author:"Lupe",
        text:"Zoe es una gran profesional. Su cercanía al leerte la carta es la que hace sentirte comodx rapidamente en las sesiones. Su enfoque en acompañar procesos internos es una gran herramienta para les consultantes. El conocimiento sale de Zoe siempre con mucho respeto, cuidado y emoción. Es una gran experiencia de autoconocimiento. La recomiendo!"
    },
    {
        author:"Ana",
        text:"Gracias inmensas por tu escucha y toda la info que nos ayuda a conocernos en mayor profundidad. ¡super recomiendo!"
    },
    {
        author:"Sara",
        text:"Muchas gracias por todo la verdad que posta das un espacio que invita a abrirse y sentirse comodx, no sé bien qué esperaba pero quedé super contenta"
    },
    {
        author:"Tatiana",
        text:"Gracias! Siento felicidad despues de nuestro encuentro! Poder abrirme y que puedas entenderme de una forma re mágica en procesos de vida!! Gracias por todas tus palabras! gracias por acompañaar este momento"
    },
    {
        author:"Abril",
        text:"Zo, miles de gracias por la hermosa sesión! Realmente me ayudó a esclarecer todo lo que me venía planteando y hoy siento que me conozco un poquito más. Obvio que me llevo muchas dudas, así como también herramientas para resolverlas de a poquito, sos lo MÁS!! volveré segurísimo, 100%"
    },
    {
        author:"Mara",
        text:"Gracias!!! hoy entendí eso que siempre te dicen. Tu carta natal es el libro de tu vida!! es tan real como eso!!! lo entendes todo. Gracias bella me encanto"
    },
    {
        author:"Lupe",
        text:"En un momento de mi vida donde hay tanto sucediendo, tenía la necesidad de saber que me estaban queriendo acercar los astros. Esta es la Revolución Solar que mas claridad me trajo, me ayudo a encontrar un norte hacia el cuál ir. "
    }
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", opacity:1, filter: "invert(51%) sepia(51%) saturate(325%) hue-rotate(156deg) brightness(92%) contrast(91%)" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",opacity:1, filter: "invert(51%) sepia(51%) saturate(325%) hue-rotate(156deg) brightness(92%) contrast(91%)" }}
        onClick={onClick}
      />
    );
  }


function Carousel() {
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
        },
        },
        {
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
        },
        },
        {
        breakpoint: 720,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    }



  return (
    <ContainerCarousel>
        <TitleSection>Testimonios</TitleSection>
        <div className="slider-container">
            <StyledSlider {...settings}>
                {testimonialData.map(testimonial=>{
                    return <div><TestimonialBox author={testimonial.author} text={testimonial.text}></TestimonialBox></div>
                })}

            </StyledSlider>
        </div>
    </ContainerCarousel>
  );
}



export default Carousel;
