import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function DateComponents() {

  var currentDate = new Date().toISOString().substring(0, 10);

  return (
    <Box>
      <TextField
        id="date"
        label="Giriş Tarihi"
        type="date"
        defaultValue={currentDate}
        sx={{ width:200,  marginTop: 3 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="Çıkış Tarihi"
        type="date"
        defaultValue={currentDate}
        sx={{ width: 200, marginTop: 3 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

export default DateComponents;
