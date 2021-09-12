import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header.js";
import WhoAmI from "./components/WhoAmI.js";
import Hard from "./components/Hard.js";
import Soft from "./components/Soft.js";
import Projects from "./components/Projects.js";
import Hobbies from "./components/Hobbies.js";
import Contact from "./components/Contact.js";
import styled from "styled-components";
import Source from "./components/source.js";


const MainContainer = styled.div``;

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();

  const [op, setOp] = useState("0%");
  const [op2, setOp2] = useState("0%");
  const [op3, setOp3] = useState("0%");
  const [op4, setOp4] = useState("0%");
  const [op5, setOp5] = useState("0%");
  const [op6, setOp6] = useState("0%");

  useEffect(() => {
    window.onscroll = () => {
      const scrollAmount1 = section1.current.getBoundingClientRect().top;
      const scrollAmount2 = section2.current.getBoundingClientRect().top;
      const scrollAmount3 = section3.current.getBoundingClientRect().top;
      const scrollAmount4 = section4.current.getBoundingClientRect().top;
      const scrollAmount5 = section5.current.getBoundingClientRect().top;
      const scrollAmount6 = section6.current.getBoundingClientRect().top;

      scrollAmount1 <= 75 ? setOp("100%") : setOp("0%");
      scrollAmount2 <= 75 ? setOp2("100%") : setOp2("0%");
      scrollAmount3 <= 75 ? setOp3("100%") : setOp3("0%");
      scrollAmount4 <= 75 ? setOp4("100%") : setOp4("0%");
      scrollAmount5 <= 75 ? setOp5("100%") : setOp5("0%");
      scrollAmount6 <= 75 ? setOp6("100%") : setOp6("0%");
      
    };
  }, []);
  return (
    <MainContainer>
      <Source/>
      <Header />
      <WhoAmI ref={section1} op={op} />
      <Hard ref={section2} op={op2} />
      <Soft ref={section3} op={op3} />
      <Projects ref={section4} op={op4} />
      <Hobbies ref={section5} op={op5} />
      <Contact ref={section6} op={op6} />
     
    </MainContainer>
  );
}

export default App;
