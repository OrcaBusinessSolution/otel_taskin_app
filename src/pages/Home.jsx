import React from "react";
import styled from "styled-components";
import HeaderInfo from "../components/HeaderInfo";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <HeaderInfo />
      <Header />
      <Slider />
      <Rooms />
      <Footer />
    </Container>
  );
}

export default Home;
