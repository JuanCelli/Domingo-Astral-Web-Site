import React from 'react'

import styled from "styled-components"

const ProfileImg = styled.img`
    object-fit: cover;
    border-top-left-radius: 4.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1.5rem;
    width: 38rem;
    height: 24rem;
    margin-left:6rem;

    @media (max-width: 768px) {
      width: 15rem;
      height: 18rem;
      margin-left:0;
  }
`;

const SobreMiImage = () => {
  return (
    <ProfileImg src='\assets\SobreMiImage.jpg'/>
  )
}

export default SobreMiImage