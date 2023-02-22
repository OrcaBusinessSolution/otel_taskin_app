import React from "react";
import styled from "styled-components";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: center;
  background-color: #f1f0ed;
  padding: 2rem;
  margin-bottom: 5rem;
`;
const HeaderDiv = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  & h4 {
    font-size: 1.6rem;
    color: #606060;
    font-family: "Nunito", sans-serif;
  }
  & p {
    color: #858a99;
    font-family: "Lato", sans-serif;
  }
`;
const RoomsDiv = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
   @media only screen and (max-width: 958px) {
    flex-direction: column;
  }
`;
const RoomDiv = styled.div`
  background-color: #fff;
  margin: 1rem;
  & h5 {
    text-align: center;
    align-items: center;
    color: #606060;
    font-family: "Nunito", sans-serif;
    padding-top: 0.5rem;
    opacity: 1;
  }
  & img:hover {
    opacity: 1;
  }
`;

const ImageDiv = styled.img`
  width: 20rem;
  opacity: 0.7;
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  border: 3px solid #c12200;
  color: #c12200;
  border-radius: 4px;
  line-height: 2.2rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  margin-top: 4rem;
  &:hover {
    background-color: #c12200;
    color: #fff;
  }
`;

function Rooms() {
  return (
    <Container>
      <HeaderDiv>
        <h4>ODALARIMIZ</h4>
        <p>Odalarımıza şimdi bir göz atın</p>
      </HeaderDiv>
      <RoomsDiv>
      <RoomDiv>
          <ImageDiv src={"./pictures/oda1.JPG"}></ImageDiv>
          <h5>Tek Kişilik Oda</h5>
        </RoomDiv>

        <RoomDiv>
          <ImageDiv src={"./pictures/oda1.JPG"}></ImageDiv>
          <h5>İki Kişilik Oda</h5>
        </RoomDiv>

        <RoomDiv>
          <ImageDiv src={"./pictures/oda1.JPG"}></ImageDiv>
          <h5>Üç Kişilik Oda</h5>
        </RoomDiv>

      </RoomsDiv>
      <RoomsButton>
        ODALARI GÖRÜNTÜLE <ArrowForwardIosIcon fontSize="small" />
      </RoomsButton>
    </Container>
  );
}

export default Rooms;
