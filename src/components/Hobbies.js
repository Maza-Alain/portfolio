import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { Title, SubTitle, Container } from "./WhoAmI";
import pic1 from "../img/fruta.jpg";
import pic7 from "../img/gabo2.jpg";
import pic3 from "../img/kajin.jpg";
import pic4 from "../img/bodegon.jpg";
import pic5 from "../img/narutolava.jpg";
import pic6 from "../img/veefs.jpg";
import pic2 from "../img/suifin2.jpg";

/* const Description = styled.p`
  font-size: 2.8rem;
  color: #fff;
  text-align: center;
  margin-top: 10rem;
  padding-left: 3rem;
  padding-right: 3rem;
`; */
const Galery = styled.div`
  display: flex;
  width: 90%;
  inset: 0;
  margin: 3rem auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  opacity: ${(props) => props.op};
  transition: opacity 0.5s ease-out;
  @media (max-width: 900px) {
  }
`;

const Art = styled.img`
  width: 100%;
  align-self: center;
  cursor: pointer;
  box-shadow: 10px 10px 6px 2px rgba(0, 0, 0, 0.2);
`;
const ArtModal = styled.img`
  max-width: 100%;
  max-height: 100vh;
  align-self: center;
`;
const ArtContainer = styled.div`
  display: flex;
  width: 20rem;
  margin: 1rem 0.5rem;
`;
const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  top: 0;
`;
const ArtInModal = styled(ArtContainer)`
  width: 80%;
  height: 100vh;
  margin: auto;
  inset: 0;
  justify-content: center;
`;
const Close = styled.p`
  font-size: 7rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 2rem;
  color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Hobbies = (props, ref) => {
  const { op } = props;
  const [showModal, setModal] = useState(false);
  const [imgShowed, setImage] = useState(null);
  const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  const viewImage = (e) => {
    setModal(true);
    setImage(e);
  };
  const arts = pictures.map((picture) => (
    <ArtContainer key={pictures.indexOf(picture)}>
      <Art src={picture} alt="art" onClick={(e) => viewImage(e.target.src)} />
    </ArtContainer>
  ));
  return (
    <Container>
      {showModal && (
        <Modal>
          <Close onClick={() => setModal(false)}>X</Close>
          <ArtInModal>
            <ArtModal src={imgShowed} alt="art in modal" />
          </ArtInModal>
        </Modal>
      )}
      <Title ref={ref}>HOBBIES</Title>
      <SubTitle>Digital painting</SubTitle>
      <Galery op={`${op}`}>{arts}</Galery>
    </Container>
  );
};

export default forwardRef(Hobbies);
