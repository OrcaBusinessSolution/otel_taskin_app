import React from "react";
import styled from "styled-components";
import HeaderInfo from "../components/GlobalComponents/HeaderInfoComponent";
import Header from "../components/GlobalComponents/HeaderComponent";
import Footer from "../components/GlobalComponents/FooterComponent";
import { HeaderName } from "../pages/Rooms";
import { Box, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import FormComponents from "../components/ComunicateionPageComponents/FormComponent";
import MapComponent from "../components/ComunicateionPageComponents/MapComponent";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 3rem;
`;
const TotalDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 2rem;
  margin-bottom: -1.5rem;
  justify-content: center;
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
