import React from 'react'
import styled from 'styled-components'
import { DivContainer } from './DivContainer'
import TestimonialBox from './TestimonialBox'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    }
]




const TestimonialContainer = () => {
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
        },
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
        },
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    }


  return (
    <div className="slider-container">
        <Slider {...settings}>
            <div>
                <TestimonialBox author={testimonialData.author} text={testimonialData.text}></TestimonialBox>
            </div>
        </Slider>
    </div>
  )
}

export default TestimonialContainer