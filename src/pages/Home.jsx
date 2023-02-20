import React from "react";
import styled from "styled-components";
import HeaderInfo from "../components/headerInfo";
import Header from "../components/header"

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <HeaderInfo />
      <Header/>
    </Container>
  );
}

export default Home;
