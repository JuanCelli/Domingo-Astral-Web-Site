import styled from "styled-components"
import { colors } from "../styled/config"

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const ContainerFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 35vh;
    background-color: ${colors.ArticuleBg1};
    padding: 2rem 0rem;
`

const SectionFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 1.2rem;
`

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `

const ItemContainer = styled.div`
  padding: .5rem 0rem;

  &:hover{
    color: ${colors.SectionBg1};
  }
`

const LinkItem = styled.a`
  text-decoration:none;
  color: ${colors.LinkUnHover};
  transition: .1s ease-in-out;


  &:hover{
    color: ${colors.SectionBg1};
  }
`

const ContentLink = styled.div`
  display: flex;
  justify-content: baseline;
  gap:.5rem ;
`

const SpanItem = styled.span`
  color: ${colors.LinkUnHover}
`

const TitleSection = styled.h2`
  color: ${colors.SectionBg1};
  font-weight: 400;
  font-size: 1.5rem;
`


const Item = ({icon, text,url}) =>{
  return (
    <ItemContainer>

      {url ?
        <LinkItem href={url}>
          <ContentLink>
            {icon} {text}
          </ContentLink>
        </LinkItem>
      :
        <SpanItem>{icon} {text}</SpanItem>}
    </ItemContainer>
  )
}






const Footer = () => {
  return (
    <ContainerFooter>
      <SectionFooter>
        <TitleSection>Contacto</TitleSection>
        <ContainerItems>
          <Item icon={<InstagramIcon fontSize="medium"/>} url="https://www.instagram.com/domingo.astral/" text="@domingo.astral"/>
          <Item icon={<WhatsAppIcon fontSize="medium"/>} url="https://wa.me/5401167911122" text="+54 011 67911122"/>
          <Item icon={<MailOutlineIcon fontSize="medium"/>} url="mailto:domingoastrall@gmail.com" text="domingoastrall@gmail.com"/>
        </ContainerItems>
        </SectionFooter>


      <SectionFooter>
        <TitleSection>Diseño Web</TitleSection>
        <ContainerItems>
          <Item url="https://www.instagram.com/lupeilustra/" text="Arte por @lupeilustra"/>
          <Item url="mailto:celli.juan.ignacio@gmail.com" text="Desarrollo Web por Juan Celli"/>
        </ContainerItems>
      </SectionFooter>

    </ContainerFooter>
  )
}

export default Footer