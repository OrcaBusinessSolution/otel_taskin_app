import React from "react";
import HeaderInfo from "../components/HeaderInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
`;

export const HeaderName = styled.div`
  height: 8rem;
  background-color: #f5f3f0;
  & h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #606060;
    padding-left: 2rem;
    padding-top:2rem
  }
`;

const RoomsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: -1.5rem;
`;
const RoomDiv = styled.div`
  justify-content: space-around;
  display: flex;
  width: 70%;
  flex-direction: row;
  margin-bottom: 5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d1d0cf;
  & img:hover {
    opacity: 1;
    transform: translate(-20px);
    -webkit-transform: translate(-20px);
    transition: all 0.6s ease-in-out;

    cursor: pointer;
  }
  @media only screen and (max-width: 958px) {
    flex-direction: column;
  }
`;

const ImageDiv = styled.img`
  width: 20rem;
  opacity: 0.8;
  @media only screen and (max-width: 958px) {
    margin: auto;
    width: 100%;
  }
`;

const InfoDiv = styled.div`
  background-color: #fff;
  margin: auto;
  width: 85%;

  & h5 {
    margin-top: 1.5rem;
    margin-left: 2rem;

    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: #606060;
    letter-spacing: 0.04rem;
  }
  & p {
    color: #858a99;
    background: #fff;
    font-family: lato, sans-serif;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.2px;
    margin-left: 2rem;
  }
  @media only screen and (max-width: 958px) {
    flex-direction: column;
    width: 100%;
  }
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  font-size: 12px;
  line-height: 1.7rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  margin-top: 4rem;
  color: #fff;
  background-color: #deb666;
  border-radius: 15px;
  border: none;
  margin-left: 1rem;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;

function Rooms() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Odalar</h1>
        </HeaderName>
        <RoomsDiv>
          <RoomDiv>
            <ImageDiv src={"./pictures/standart.JPG"}></ImageDiv>
            <InfoDiv>
              <h5>Tek Kişilik Oda</h5>
              <p>Tek kişiler için uygun olarak tasarlanmış Standart odamız</p>
              <RoomsButton>
                DETAYLI BİLGİ <ArrowForwardIosIcon fontSize="small" />
              </RoomsButton>
              <RoomsButton>
                REZERVASYON <ArrowForwardIosIcon fontSize="small" />
              </RoomsButton>
            </InfoDiv>
          </RoomDiv>
          <RoomDiv>
            <ImageDiv src={"./pictures/double.JPG"}></ImageDiv>
            <InfoDiv>
              <h5>İki Kişilik Oda</h5>
              <p>İki kişilik ihtiyaçlar için tasarlanmış Double odamız</p>
              <RoomsButton>
                DETAYLI BİLGİ <ArrowForwardIosIcon fontSize="small" />
              </RoomsButton>
              <RoomsButton>
                REZERVASYON <ArrowForwardIosIcon fontSize="small" />
              </RoomsButton>
            </InfoDiv>
          </RoomDiv>
          <RoomDiv>
            <ImageDiv src={"./pictures/triple.JPG"}></ImageDiv>
            <InfoDiv>
              <h5>Üç Kişilik Oda</h5>
              <p>
                Üç ve daha fazla kişilik ihtiyaçlar için tasarlanmış Triple
                odamız
              </p>
              <RoomsButton>
                DETAYLI BİLGİ <ArrowForwardIosIcon fontSize="small" />
              </RoomsButton>
              <RoomsButton>
                REZERVASYON <ArrowForwardIosIcon fontSize="small" />
              </RoomsButton>
            </InfoDiv>
          </RoomDiv>
        </RoomsDiv>
      </Container>
      <Footer />
    </>
  );
}

export default Rooms;

{
  /* 
        <RoomDiv>
          <h5>İki Kişilik Oda</h5>
          <ImageDiv src={"./pictures/double.JPG"}></ImageDiv>
        </RoomDiv>

        <RoomDiv>
          <h5>Üç Kişilik Oda</h5>
          <ImageDiv src={"./pictures/triple.JPG"}></ImageDiv>
        </RoomDiv> */
}
