import React from "react";
import { Box, TextField } from "@mui/material";

function NoteComponent() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "25rem", marginTop:"3rem" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="optionalMessage"
        label="Eklemek istedikleriniz varsa lütfen bizimle paylaşın"
        multiline
        rows={3}
        variant="outlined"
      />
      <br />
    </Box>
  );
}

export default NoteComponent;
