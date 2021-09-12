import React, { forwardRef } from "react";
import styled from "styled-components";
import { Title, Container } from "./WhoAmI";
import "../index.css";
import { ReactComponent as Telegram } from "../img/telegrama.svg";
import { ReactComponent as Twitter } from "../img/twt.svg";
import { ReactComponent as Wp } from "../img/wp.svg";
import { ReactComponent as In } from "../img/in.svg";

const Container2 = styled(Container)`
  background-color: #374445;
  overflow: hidden;
`;
const SvgContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  opacity: ${(props) => props.op};
  transition: opacity 0.5s ease-out;
`;
const Contact = (props, ref) => {
  const { op } = props;
  return (
    <Container2>
      <Title ref={ref}>CONTACT</Title>
      <SvgContainer op={`${op}`}>
        <a href="https://t.me/maza_alain" target="_blank" rel="noreferrer">
          {" "}
          <Telegram className="svg" />
        </a>
        <a
          href="https://twitter.com/maza_alain?s=07 "
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Twitter className="svg" />
        </a>
        <a
          href="https://codebookcommx.wordpress.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Wp className="svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/maza-alain/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <In className="svg" />
        </a>
      </SvgContainer>
    </Container2>
  );
};

export default forwardRef(Contact);
