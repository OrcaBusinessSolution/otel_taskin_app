import { Textarea } from "@mui/joy";
import { Box, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  width: 65%;
  @media only screen and (max-width: 958px) {
    width: 100%;
    background-color: white;
    flex-direction: column;
  }
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  font-size: 12px;
  line-height: 2.2rem;
  font-weight: bold;
  letter-spacing: 0.08rem;
  color: #fff;
  background-color: #deb666;
  border: none;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;
function FormComponents() {
  return (
    <FormDiv>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "20rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth id="name" label="İsminiz" variant="filled" />
        <TextField
          fullWidth
          id="phoneNumber"
          label="Telefon Numaranız"
          variant="filled"
        />
        <br />
        <TextField
          id="emailAdress"
          label="E-Mail Adresiniz "
          variant="filled"
        />
        <TextField id="subject" label="Konu" variant="filled" />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "23rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-multiline-static"
          label="Mesajınız"
          multiline
          rows={4}
          variant="filled"
        />
        {/* <Textarea filled minRows={5} placeholder="Mesajınız" /> */}
        <br />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "12rem" },
        }}
        noValidate
        autoComplete="off"
      >
        <RoomsButton>MESAJINI GÖNDER</RoomsButton>
      </Box>
    </FormDiv>
  );
}

export default FormComponents;
