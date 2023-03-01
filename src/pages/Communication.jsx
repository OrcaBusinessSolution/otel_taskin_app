import React from "react";
import styled from "styled-components";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import { HeaderName } from "../pages/Rooms";
import FormComponents from "../components/CommunicationPageComponents/FormComponent";
import MapComponent from "../components/CommunicationPageComponents/MapComponent";

const Container = styled.div`
margin-bottom: 5rem;
`;
const TotalDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content:space-around;
  text-align:center;
  padding: 2rem;
  margin-bottom: -1.5rem;
  @media only screen and (max-width: 958px) {
    flex-direction: column;
  }
`;

function Communication() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>İletişim</h1>
        </HeaderName>
        <TotalDiv>
          <FormComponents/>
          <MapComponent/>
        </TotalDiv>
      </Container>
      <Footer/>
    </>
  );
}

export default Communication;
