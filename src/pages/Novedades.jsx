import { InstagramEmbed } from 'react-social-media-embed'
import ScrollToTop from '../utils/ScrollToTop.js'
import MainContainer from '../styledComponents/MainContainer.jsx'
import { SectionContainer } from '../components/SectionContainer.jsx'
import { colors } from '../styled/config.js'
import TitleSection from '../styledComponents/TitleSection.jsx'
import styled from 'styled-components'


const ImgContact = styled.img`
    margin-top: 4rem;
    object-fit: cover;
    width: 28rem;
    height: 50rem;
    
    @media (max-width: 768px) {
        width: 22rem;
        height: 40rem;
  }
`

const IGEmbedContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.ContactoBg};
    width: 400px;
    height: 675px;
    border-radius: 1rem;
    border-color:4px ${colors.ArticuleBg1};
    box-shadow: 0 0 4px ${colors.ArticuleBg1};
    transition: .4s;

    &:hover{
        background-color: ${colors.SectionBg3};
        box-shadow: 0 0 40px ${colors.SectionBg1};
    }

    @media (max-width: 768px) {
        border: none;
        box-shadow: none;
        &:hover{
        background-color: inherit;
        box-shadow: none;
    }
  }

`


const Title = styled.h2`
    display: none;
    font-size: 2.2rem;
    color:${({ color }) => color ? color : colors.ArticuleBg1};
    margin-bottom: .5rem;
    @media (max-width: 768px) {
        display:block
    }
`



const Novedades = () => {
    ScrollToTop()
  return (
    <MainContainer>
        <SectionContainer color={colors.ContactoBg} flexDirection="column" justifyContent="center">
            <SectionContainer color={colors.ContactoBg} width={"70%"} justifyContent="space-around" ReverseWarp={true}>
                <ImgContact  src='/assets/imgNovedades.png'></ImgContact>
                    <IGEmbedContainer >
                        <InstagramEmbed url="https://www.instagram.com/p/C6PZBgSgj1D/" width={328} />
                    </IGEmbedContainer>
                    <Title>Novedades</Title>
            </SectionContainer>
        </SectionContainer>
    </MainContainer>
  )
}

export default Novedades