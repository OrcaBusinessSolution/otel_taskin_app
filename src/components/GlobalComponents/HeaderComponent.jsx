import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 17px;
  font-weight: 1000;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderDiv = styled.div`
  margin-right: 2rem;
  & a {
    color: white;
    letter-spacing: 0.1em;
    margin-left: 1.5em;
    color: #606060;
  }
  & a:hover {
    color: #c12200;
    font-size: 18px;
  }
`;

const ImageDiv = styled.img`
  height: 5em;
  margin-left: 2rem;
`;

function Header() {
  return (
    <Container>
      <Link to="/">
        <ImageDiv src={"./pictures/logo.png"} alt="otel, taşkın otel, keşan"></ImageDiv>
      </Link><hr/>
      <HeaderDiv>
        <Link to="/" underline="none">
          ANASAYFA
        </Link>
        <Link to="/rooms" underline="none">
          ODALAR
        </Link>
        <Link to="/gallery" underline="none">
          GALERİ
        </Link>
        <Link to="/reservation" underline="none">
          REZERVASYON
        </Link>
        <Link to="/communication" underline="none">
          İLETİŞİM
        </Link>
      </HeaderDiv>
    </Container>
  );
}

export default Header;
