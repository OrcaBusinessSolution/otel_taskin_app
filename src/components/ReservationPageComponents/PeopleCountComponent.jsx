import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PeopleCountComponent() {
  const [adultCount, setAdultCount] = useState("");

  const [childCount, setChildCount] = useState("");

  const handleChangeAdultCount = (event) => {
    setAdultCount(event.target.value);
  };
  const handleChangeChildCount = (event) => {
    setChildCount(event.target.value);
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& > :not(style)": { marginTop: "1rem", width: "12.5rem" },
      }}
    >
      <TextField
        type="number"
        id="adultCount"
        label="Yetişkin"
        variant="outlined"
        value={adultCount}
        onChange={handleChangeAdultCount}
        helperText="Yetişkin sayısıı girin"
        InputProps={{ inputProps: { min: 0, max: 20 } }}
      />
      <TextField
        type="number"
        id="childCount"
        label="Çocuk"
        variant="outlined"
        value={childCount}
        onChange={handleChangeChildCount}
        helperText="Çocuk sayısı girin"
        InputProps={{ inputProps: { min: 0, max: 20 } }}
      />
    </Box>
  );
}

export default PeopleCountComponent;
