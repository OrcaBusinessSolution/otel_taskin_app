import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function ContactInfoComponent() {
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& > :not(style)": { marginTop: "1rem", width: "15rem" },
      }}
    >
      <TextField
        id="phoneNumber"
        label="Telefon Numarası"
        variant="outlined"
        value={phoneNumber}
        onChange={handleChangePhoneNumber}
        helperText="Telefon numaranızı girin"
      />
      <TextField
        id="email"
        label="E-Mail"
        variant="outlined"
        onChange={handleChangeEmail}
        value={email}
        helperText="E-Mail adresinizi girin"
      />
    </Box>
  );
}

export default ContactInfoComponent;
