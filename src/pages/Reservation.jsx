import React from "react";
import styled from "styled-components";
import { HeaderName } from "../pages/Rooms";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import FormComponent from "../components/ReservationPageComponents/FormComponent"

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 3rem;
`;

function Reservation() {
  return (
    <>
      <HeaderInfo />
      <Header />
      <Container>
        <HeaderName>
          <h1>Rezervasyon</h1>
        </HeaderName>
        <FormComponent/>
      </Container>
      <Footer/>
    </>
  );
}

export default Reservation;
