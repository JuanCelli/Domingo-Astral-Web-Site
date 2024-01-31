import styled from "styled-components"

const ProfileImg = styled.img`
    object-fit: cover;
    border-radius: 100%;
    width: 600px;
    height: 600px;
`;

export const ProfileImage = () => {
  return (
    <ProfileImg src="src\assets\D143B1D8-D7CA-4AB5-9F78-B89FAFD99E61.jpg"></ProfileImg>
  )
}
