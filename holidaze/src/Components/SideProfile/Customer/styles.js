import styled from "styled-components";

export const User = styled.h3`
  color: ${(props) => props.theme.color.menuText};
  display: block;
  text-align: center;
`;

export const Img = styled.img`
  display: flex;
  margin: auto;
  padding: 10px;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`;
