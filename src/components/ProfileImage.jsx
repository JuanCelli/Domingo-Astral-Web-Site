import styled from "styled-components"

const ProfileImg = styled.img`
    object-fit: cover;
    border-top-left-radius: 4.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1.5rem;
    width: 18rem;
    height: 26rem;
    margin-left:6rem;

    @media (max-width: 768px) {
      width: 15rem;
      height: 18rem;
      margin-left:0;
  }
`;



export const ProfileImage = () => {
  return (
    <ProfileImg src="\assets\D143B1D8-D7CA-4AB5-9F78-B89FAFD99E61.jpg"></ProfileImg>
  )
}
