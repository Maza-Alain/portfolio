import React, { forwardRef } from "react";
import styled from "styled-components";
import { Title, SubTitle, Container } from "./WhoAmI";

const Description = styled.p`
  font-size: 2.8rem;
  color: #fff;
  text-align: justify;
  margin-top: 7rem;
  padding-left: 3rem;
  padding-right: 3rem;
  opacity: ${(props) => props.op};
  transition: opacity 0.5s ease-out;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media (max-width: 425px) {
    font-size: 1.5rem;
    margin-top: 5.6rem;
  }
`;
const Soft = (props, ref) => {
  const { op } = props;
  return (
    <Container>
      <Title ref={ref}>SOFT</Title>
      <SubTitle>Skills</SubTitle>
      <Description op={`${op}`}>
        Autodidact | Creative | Critical thinking | Disciplined | Open to learn
        new technologies | Collavorative | Tenacious | Responsible with my duty
        | Respectful of authority | Open to dialogue | Faithful to myself | Calm
        demeanor
      </Description>
    </Container>
  );
};

export default forwardRef(Soft);
