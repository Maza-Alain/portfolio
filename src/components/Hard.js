import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { Title, SubTitle, Container } from "./WhoAmI";

import { techs } from "../hardHelper";

const Container2 = styled(Container)`
  background-color: #374445;
`;
const Display = styled.div`
  width: 50%;
  height: 40vh;
  margin: 0.2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ScrollContainer = styled.div`
  width: 80%;
  height: 30vh;
  margin: 0.2rem auto;
  margin-top: 0.9rem;
  display: flex;
  overflow-x: scroll;
  opacity: ${(props) => props.op};
  transition: opacity 0.5s ease-out;
`;
const DisImg = styled.img`
  width: 30%;
  align-self: center;
`;
const DisName = styled.p`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;
const DisDiv = styled.div`
  width: 50%;
  height: 3.2vh;
  margin: 0 auto;
  background-color: #ccc;
`;
const DisDiv2 = styled.div`
  width: ${(props) => props.width};
  height: 3.2vh;
  background-color: #0bbba1;
  transition: width 0.7s ease-out;
`;
const SelectTech = styled.p`
  font-size: 3rem;
  color: #fff;
  height: 40vh;
  text-align: center;
  padding-top: 7rem;
  @media (max-width: 556px) {
    font-size: 2rem;
  }
`;
const TechImg = styled.img`
  cursor: pointer;
  margin: 0 0.5rem;
  height: 95%;
  align-self: center;
  @media (max-width: 556px) {
    max-width: 10rem;
    min-width: 9rem;
    max-height: 70%;
  }
`;

const Hard = (props, ref) => {
  const { op } = props;

  const hards = techs.map((hard) => (
    <TechImg
      key={hard.id}
      src={hard.src}
      alt={hard.name}
      onClick={() => displayImg(hard.id)}
    />
  ));
  const [ondisplay, updatedisplay] = useState({});
  const [showDisplay, handleShow] = useState(false);

  const displayImg = (id) => {
    handleShow(true);
    const hardSkills = techs.filter((hard) => hard.id === id);
    updatedisplay(hardSkills[0]);
  };
  return (
    <Container2>
      <Title ref={ref}>HARD</Title>
      <SubTitle>Skills</SubTitle>
      {showDisplay ? (
        <Display>
          <DisImg src={ondisplay.src} alt={ondisplay.name} />
          <DisName>{ondisplay.name}</DisName>
          <DisDiv>
            <DisDiv2 width={ondisplay.width}></DisDiv2>
          </DisDiv>
        </Display>
      ) : (
        <SelectTech>Scroll and select a Technology</SelectTech>
      )}

      <ScrollContainer op={`${op}`}>{hards}</ScrollContainer>
    </Container2>
  );
};

export default forwardRef(Hard);
