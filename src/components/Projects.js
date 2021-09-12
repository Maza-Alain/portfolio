import React, { forwardRef } from "react";
import styled from "styled-components";
import { Title, Container } from "./WhoAmI";
import project1 from "../img/vang.png";
import project2 from "../img/universe.png";

const Container2 = styled(Container)`
  background-color: #374445;
`;
const ProjectsContainer = styled.div`
  width: 90%;

  margin: auto;
  inset: 0;
  display: flex;
  justify-content: center;
  opacity: ${(props) => props.op};
  transition: opacity 0.5s ease-out;
  @media (max-width: 900px) {
    overflow-x: scroll;
    justify-content: unset;
  }
`;
const ImgContainer = styled.div`
  flex-shrink: 0;
  width: 200px;
  height: 30rem;
  margin: 1rem 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const Project = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 20px 20px 6px 2px rgba(0, 0, 0, 0.3);
`;
const Hover = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(50, 125, 131, 0.87);
  color: cornsilk;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
  transition: all 1s ease-out;
  clip-path: circle(0% at 100% 0%);
  ${ImgContainer}:hover & {
    clip-path: circle(100% at 100% 50%);
  }
`;

const Projects = (props, ref) => {
  const { op } = props;
  return (
    <Container2>
      <Title ref={ref}>PROJECTS</Title>
      <ProjectsContainer op={`${op}`}>
        <ImgContainer>
          <a
            href="https://vangstore.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Project src={project1} alt="Project 1" />

            <Hover>
              <p>
                A simple e-commerce simulation, using React hooks, context,
                responsive design and styled components{" "}
              </p>
            </Hover>
          </a>
        </ImgContainer>

        <ImgContainer>
          <a
            href="https://universedaily.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Project src={project2} alt="Project 1" />

            <Hover>
              <p>
                An app who gives you a daily diferent universe picture using the
                nasa API, React hooks, responsive design, animations and styled
                components
              </p>
            </Hover>
          </a>
        </ImgContainer>
      </ProjectsContainer>
    </Container2>
  );
};

export default forwardRef(Projects);
