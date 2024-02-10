
import { colors } from '../styled/config'
import './App.css'
import { ArticuleContainer } from './components/ArticuleContainer.jsx'
import { AvatarSessions } from './components/AvatarSessions'
import { BackgroundImg } from './components/BackgroundImg'
import { ProfileImage } from './components/ProfileImage'
import { SectionContainer } from './components/SectionContainer'
import Navbar from './components/Navbar.jsx'
import MainContainer from './styledComponents/MainContainer'


function App() {

  return (
    <>
      <MainContainer>
        <Navbar>

        </Navbar>
        <BackgroundImg></BackgroundImg>
        <SectionContainer>
          <ArticuleContainer title="Sobre Mí">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </ArticuleContainer>
          <ProfileImage></ProfileImage>
        </SectionContainer>
        <SectionContainer color={colors.SectionBg2}>
          <AvatarSessions src="src\assets\foto sin fondo.png" title="Carta natal"></AvatarSessions>
          <AvatarSessions src="src\assets\sin fondo 2.png" title="Carta natal con transitos"></AvatarSessions>
          <AvatarSessions src="src\assets\ima sin fondo 2.png" title="Revolución solar"></AvatarSessions>
          <AvatarSessions src="src\assets\IMAGEN SIN FONDO 2.png" title="Sinastría"></AvatarSessions>
          <AvatarSessions src="src\assets\foto flor 2 sin fondo.png" title="Flores de Bach"></AvatarSessions>
        </SectionContainer>

      </MainContainer>
    </>
  )
}

export default App
