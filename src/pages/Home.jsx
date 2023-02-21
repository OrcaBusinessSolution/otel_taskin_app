import React from "react";
import styled from "styled-components";
import InfoDiv from "../components/HeaderInfo";
import Header from "../components/header"

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <InfoDiv />
      <Header/>
    </Container>
  );
}

export default Home;
