
import './App.css'
import { ArticuleContainer } from './components/ArticuleContainer'
import { BackgroundImg } from './components/BackgroundImg'
import { ProfileImage } from './components/ProfileImage'
import { SectionContainer } from './components/SectionContainer'
import Navbar from './components/navBar'
import MainContainer from './styledComponents/MainContainer'

ProfileImage
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

      </MainContainer>
    </>
  )
}

export default App
