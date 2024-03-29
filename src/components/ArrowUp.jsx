import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { colors } from '../styled/config'



const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    font-size: 1.1rem;
    color:${colors.SectionBg1};
    transition: .3s ease-in-out;


`

const Link = styled.a`
    text-decoration: none;
`

const ContainerArrowUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position:fixed;
    right: 1rem;
    bottom: 1rem;
    width: 2.2rem;
    height: 2.2rem;
    background-color: ${colors.ArticuleBg1};
    cursor: pointer;
    transition: .3s ease-in-out;
    
    &:hover {
        background-color: ${colors.SectionBg2};

        ${FontAwesomeIconStyled}{
            color:${colors.ArticuleBg1};
        }
    }
`

const ArrowUp = () => {
  return (
    <Link href="#root" >
        <ContainerArrowUp>
                <FontAwesomeIconStyled icon={faArrowUp} />
        </ContainerArrowUp>
    </Link>

  )
}

export default ArrowUp