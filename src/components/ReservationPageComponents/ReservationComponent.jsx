import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  @media only screen and(max-width: 958px) {
    background-color: red;
  }
`;

const PairDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  color: #606060;
`;

const RoomsButton = styled.button`
  align-items: center;
  text-align: center;
  font-size: 14px;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-top: 3rem;
  color: #fff;
  background-color: #deb666;
  border-radius: 0px;
  border: none;
  width: 100%;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ReservationComponent() {
  const [open, setOpen] = useState(false);

  const form = useRef();

  const handleClick = async () => {
    setOpen(true);
  };

  const resetForm = async () => {
    setRoomType("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setStartDate("");
    setEndDate("");
    setAdultCount("");
    setChildCount("");
    setNote("");
  };

  const alertAndResetForm = async () => {
    await handleClick();
    await resetForm();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_28g5uop",
        "template_1ihzn0n",
        form.current,
        "uLB1EpG4KDSdc4rph"
      )
      .then(alertAndResetForm());
  };

  const [roomType, setRoomType] = useState("Standart Oda");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adultCount, setAdultCount] = useState("");
  const [childCount, setChildCount] = useState("");
  const [note, setNote] = useState("");

  const handleRoomType = (event) => {
    setRoomType(event.target.value);
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleAdultCount = (event) => {
    setAdultCount(event.target.value);
  };
  const handleChildCount = (event) => {
    setChildCount(event.target.value);
  };
  const handleNote = (event) => {
    setNote(event.target.value);
  };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail}>
        <PairDiv>
          <select
            className="selectpicker show-tick form-select form-select-md"
            value={roomType}
            onChange={handleRoomType}
            required
            id="roomType"
            name="roomType"
          >
            <option value="Standart Oda">Standart Oda</option>
            <option value="Double Oda">Double Oda</option>
            <option value="Triple Oda">Triple Oda</option>
          </select>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="firstName">İsim</label>
            <input
              required
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              name="firstName"
              onChange={handleFirstName}
              placeholder="İsminizi girin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Soy İsim</label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              name="lastName"
              onChange={handleLastName}
              aria-describedby="emailHelp"
              placeholder="Soy isminizi girin"
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={handleEmail}
              placeholder="Mail adresinizi girin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Telefon</label>
            <input
              required
              type="tel"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              name="phoneNumber"
              onChange={handlePhoneNumber}
              aria-describedby="emailHelp"
              placeholder="Numaranızı girin"
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="col col-lg">
            <label htmlFor="startDate">Giriş Tarihi</label>
            <input
              required
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              name="startDate"
              onChange={handleStartDate}
            />
          </div>
          <div className="col col-lg">
            <label htmlFor="endDate">Çıkış Tarihi</label>
            <input
              required
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={handleEndDate}
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="adultCount">Yetişkin</label>
            <input
              required
              type="number"
              min="0"
              className="form-control"
              id="adultCount"
              value={adultCount}
              name="adultCount"
              onChange={handleAdultCount}
              placeholder="Yetişkin sayısı"
            />
          </div>
          <div className="form-group">
            <label htmlFor="childCount">Çocuk</label>
            <input
              required
              type="number"
              min="0"
              className="form-control"
              id="childCount"
              value={childCount}
              name="childCount"
              onChange={handleChildCount}
              aria-describedby="emailHelp"
              placeholder="Çocuk sayısı"
            />
          </div>
        </PairDiv>
        <PairDiv>
          <div className="form-group">
            <label htmlFor="note">Not(Opsiyonel)</label>
            <textarea
              type="text"
              rows="3"
              cols="50"
              className="form-control"
              id="note"
              value={note}
              name="note"
              onChange={handleNote}
              placeholder="Eklemek istedikleriniz.."
            />
          </div>
        </PairDiv>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <RoomsButton type="submit">REZERVASYON OLUŞTUR</RoomsButton>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Mailiniz iletilmiştir.
            </Alert>
          </Snackbar>
        </Stack>
      </form>
    </Container>
  );
}

export default ReservationComponent;
