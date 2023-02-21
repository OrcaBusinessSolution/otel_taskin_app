import React from "react";
import styled from "styled-components";
import MdPhone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Chip, ListItemButton } from "@mui/material";

const InfoDiv = styled.div`
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  color: #858a99;
  width: 100%;
  position: relative;
  font-size: 14px;
  display: flex;
  flex: 1;
  flex-direction: row;
  & p {
    margin-left: 20em;
  }
  & a {
    text-decoration: none;
    color: #858a99;
    right: -65em;
  }
`;
function HeaderInfo() {
  return (
    <InfoDiv>
      <p>Taşkın Otel'e hoş geldiniz</p>
      <div>
        <ListItemButton component="a" href="tel:02847141706">
          <Chip icon={<MdPhone />} size={"small"} label="0284 714 1706" />
          {/* <a href="tel:02847141706">02847141706 </a> */}
        </ListItemButton>
      </div>

      <div>
        <ListItemButton component="a" href="mailto:info@oteltaskin.com">
          <Chip
            icon={<EmailIcon />}
            size={"small"}
            label="info@oteltaskin.com"
          />
          {/* <a href="mailto:info@oteltaskin.com">info@oteltaskin.com </a> */}
        </ListItemButton>
      </div>
    </InfoDiv>
  );
}

export default HeaderInfo;