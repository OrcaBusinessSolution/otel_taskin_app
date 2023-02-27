import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  display: flex;
  flex: 1;
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
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 958px) {
    flex-direction: column;
  }
`;
const RoomDiv = styled.div`
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
    transform: translate(-20px);
    transition: all .6s ease-in-out;
    -webkit-transform: translate(-20px);
    cursor:pointer;
    box-shadow: 10px 10px 10px #606060;
  }
`;

const ImageDiv = styled.img`
  width: 20rem;
  opacity: 0.7;
`;

const RoomsButton = styled.button`
  align-items: center;
  border-radius: 12px;
  border: none;
  text-align: center;
  border-radius: 4px;
  line-height: 1.7rem;
  font-weight: bold;
  border-radius: 15px;
  letter-spacing: 0.05rem;
  margin-top: 4rem;
  color: #fff;
  background-color: #deb666;
  &:hover {
    background-color: #f2f2f2;
    color: #deb666;
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
          <ImageDiv src={"./pictures/standart.JPG"}></ImageDiv>
          <h5>Standart Oda</h5>
        </RoomDiv>

        <RoomDiv>
          <ImageDiv src={"./pictures/double.JPG"}></ImageDiv>
          <h5>Double Oda</h5>
        </RoomDiv>

        <RoomDiv>
          <ImageDiv src={"./pictures/triple.JPG"}></ImageDiv>
          <h5>Triple Oda</h5>
        </RoomDiv>
      </RoomsDiv>
      <RoomsButton>
        ODALARI GÖRÜNTÜLE <ArrowForwardIosIcon fontSize="small" />
      </RoomsButton>
    </Container>
  );
}

export default Rooms;
