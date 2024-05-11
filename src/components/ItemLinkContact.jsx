import styled from 'styled-components';
import { colors } from '../styled/config';


const ItemContainer = styled.div`
  padding: .5rem 0rem;
  color: ${({ color }) => (color ? color : colors.LinkUnHover)};

  &:hover{
    color: ${colors.SectionBg1};
  }

  @media (max-width: 768px) {
    color: ${({ color }) => (color ? color : colors.ContactoBg)};
  }
`



const ContentLink = styled.div`
  display: flex;
  justify-content: baseline;
  gap:.5rem ;
`

const SpanItem = styled.span`
  color: inherit
`

const LinkItem = styled.a`
  text-decoration:none;
  color: inherit;
  transition: .1s ease-in-out;


  &:hover{
    color: ${colors.SectionBg1};
    @media (max-width: 768px) {
    color: ${({ color }) => (color ? color : colors.LinkUnHover)};
  }
  }
`



const Item = ({icon, text,url,color}) =>{
    return (
      <ItemContainer color={color}>
  
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

export default Item