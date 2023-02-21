import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "../pictures/logo.png";

const Container = styled.div`
  width: 100%;
  flex-direction: row;
  flex: 1;
  display: flex;
`;

const HeaderDiv = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  flex-direction: row;
  flex: 1;
  display: flex;
  margin: 3em 40em;
  background-color: #000;
`;

const Image = styled.img`
  width: 300px;
  margin-top:1em;
  margin-left:em;
`;

function Header() {
  return (
    <Container>
      <Image src={logo}></Image>
      <HeaderDiv>
        <Link href="#" underline="none">
          ANA SAYFA
        </Link>
        <Link href="#" underline="none">
          ODALAR
        </Link>
        <Link href="#" underline="none">
          GALERİ
        </Link>
        <Link href="#" underline="none">
          REZERVASYON
        </Link>
        <Link href="#" underline="none">
          İLETİŞİM
        </Link>
      </HeaderDiv>
    </Container>
  );
}

export default Header;

{
  /* <Header>
<div id="logo">
  <Link href="http://oteltaskin.com/" underline="none">
    <Image src={logo} alt="otel, taşkın otel, keşan" width="260em" />
  </Link>
</div>
<div>
  <Link href="#" underline="none"> ANA SAYFA</Link>
</div>
<div>
  <Link href="#" underline="none">ODALAR</Link>
</div>
<div>
  <Link href="#" underline="none">GALERİ</Link>
</div>
<div>
  <Link href="#" underline="none">REZERVASYON</Link>
</div>
<div>
  <Link href="#" underline="none">İLETİŞİM</Link>
</div>
</Header> */
}

// & div#logo {
//   margin-top: -1em;
//   margin-left: -18em;
//   width: 20em;
// }
// & div {
//   padding: 1em;
// }
