import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function SelectRoomType() {
  const [roomType, setRoomType] = React.useState("");

  const handleChange = (event) => {
    setRoomType(event.target.value);
  };
  return (
      <FormControl fullWidth>
        <InputLabel>Oda Türü</InputLabel>
        <Select
          id="roomType"
          value={roomType}
          label="Oda Türü"
          onChange={handleChange}
        >
          <MenuItem value="Tek Kişilik Oda">Standart Oda</MenuItem>
          <MenuItem value="İki Kişilik Oda">Double Oda</MenuItem>
          <MenuItem value="Üç Kişilik Oda">Triple Oda</MenuItem>
        </Select>
      </FormControl>
  );
}

export default SelectRoomType;
