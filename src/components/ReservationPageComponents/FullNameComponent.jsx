import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function FullNameComponent() {
  const [name, setName] = useState("");

  const [surname, setSurname] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& > :not(style)": { marginTop: "2rem", width: "12.5rem" },
      }}
    >
      <TextField
        id="name"
        label="İsim"
        variant="outlined"
        onChange={handleChangeName}
        value={name}
        helperText = "İsminizi girin"

      />
      <TextField
        id="surname"
        label="Soyisim"
        variant="outlined"
        value={surname}
        onChange={handleChangeSurname}
        helperText = "Soyisminizi girin"

      />
    </Box>
  );
}

export default FullNameComponent;
