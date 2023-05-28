import styled from "styled-components";

export const Section = styled.section`
  max-height: 100vh;
  @media screen and (min-width: 575px) {
    width: 100%;
    display: flex;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  margin: 0;

  @media screen and (min-width: 575px) {
    width: 60%;
  }
`;

export const Side = styled.div`
  width: 100%;
  @media screen and (min-width: 575px) {
    width: 40%;
  }
`;

export const LoginDiv = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
