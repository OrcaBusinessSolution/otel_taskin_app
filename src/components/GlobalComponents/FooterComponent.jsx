import React from "react";
import styled from "styled-components";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Container = styled.div`
margin-top:-3rem;
`;

const CopyRight = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #858a99;
  display: flex;
  flex:1;
  justify-content: space-around;
  &:hover{
    font-size:17px;
    font-weight: 700;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  @media only screen and (max-width: 958px) {
    flex-direction: column;
  }
`;

const ImageLogo = styled.img`
  width: 20%;
  margin-left: 2rem;
`;

const ContactDiv = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  & h4 {
    color: #606060;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
  }
  & p {
    color: #858a99;
    font-family: "Lato", sans-serif;
    font-size: 15px;
    font-weight: 400;
  }
`;

function Footer() {
  return (
    <Container>
      <ContentDiv>
        <ImageLogo src={"./pictures/logo.png"}></ImageLogo>
        <br />
        <ContactDiv>
          <h4>İLETİŞİM</h4>
          <FmdGoodOutlinedIcon fontSize="small"></FmdGoodOutlinedIcon>
          <p>İspat Cami Mahallesi, Kurtuluş Cad. No:8 Edirne/Keşan, Türkiye</p>
          <PhoneOutlinedIcon></PhoneOutlinedIcon>
          <p>0284 714 17 06</p>
          <EmailOutlinedIcon></EmailOutlinedIcon>
          <p>info@oteltaskin.com</p>
        </ContactDiv>
      </ContentDiv>
      <CopyRight>
        <p>© Taşkın Hotel 2023</p>
      </CopyRight>
    </Container>
  );
}

export default Footer;
