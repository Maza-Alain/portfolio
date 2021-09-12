import React from "react";
import "../index.css";
import styled from "styled-components";
import { ReactComponent as Git } from "../img/github.svg";
import { ReactComponent as Cv } from "../img/cv.svg";

const Container = styled.div`
  width: 25%;
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  z-index: 15;
`;

const A = styled.a`
    width: 50%;
`;
const Source = () => {
  return (
    <Container>
      <A
        href="https://codebookcommx.wordpress.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Git className="srcSvg1" />
      </A>

      <A
        href="https://codebookcommx.wordpress.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <Cv className="srcSvg1" />
      </A>
      
    </Container>
  );
};

export default Source;
