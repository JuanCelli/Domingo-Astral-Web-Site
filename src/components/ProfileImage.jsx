import styled from "styled-components"

const ProfileImg = styled.img`
    object-fit: cover;
    border-top-left-radius: 90px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 50px;
    width: 22rem;
    height: 30rem;
`;

export const ProfileImage = () => {
  return (
    <ProfileImg src="\assets\D143B1D8-D7CA-4AB5-9F78-B89FAFD99E61.jpg"></ProfileImg>
  )
}
