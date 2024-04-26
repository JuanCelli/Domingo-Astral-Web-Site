import React from 'react'

import styled from "styled-components"

const ProfileImg = styled.img`
    object-fit: cover;
    border-top-left-radius: 4.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1.5rem;
    width: 32rem;
    height: 22rem;
    margin-left:6rem;

    @media (max-width: 768px) {
      width: 20rem;
      height: 16rem;
      margin-left:0;
  }
`;

const SobreMiImage = () => {
  return (
    <ProfileImg src='\assets\SobreMiImage.jpg'/>
  )
}

export default SobreMiImage