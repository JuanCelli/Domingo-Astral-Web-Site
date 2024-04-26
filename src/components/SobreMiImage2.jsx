import React from 'react'

import styled from "styled-components"

const ProfileImg3 = styled.img`
    position: relative;
    left: 1rem;
    object-fit: cover;
    border-top-left-radius: 4.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1.5rem;
    width: 28rem;
    height: 18rem;
    margin-left:6rem;

    @media (max-width: 768px) {
      width: 18rem;
      height: 14rem;
      margin-left:0;
  }
`;
const ProfileImg2 = styled.img`
    position: relative;
    right: 6rem;
    bottom:11.2rem;
    object-fit: cover;
    border-top-left-radius: 2rem;
    border-top-right-radius: 4.5rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1.5rem;
    width: 18rem;
    height: 28rem;
    margin-left:6rem;

    @media (max-width: 768px) {
      width: 14rem;
      height: 18rem;
      margin-left:4rem;
  }
`;

const ContainerImages = styled.div`
  justify-content: center;
  width: 70%;

  @media (max-width: 768px) {
    height: 24rem;
  }

`

const SobreMiImage2 = () => {
  return (
    <ContainerImages>
      <ProfileImg3 src='\assets\SobreMiImage3.jpg'/>
      <ProfileImg2 src='\assets\SobreMiImage2.jpg'/>
    </ContainerImages>
  )
}

export default SobreMiImage2