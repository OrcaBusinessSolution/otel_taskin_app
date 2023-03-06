import React, { useState } from "react";
import styled from "styled-components";

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

function ReservationComponent() {
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
      <form>
        <PairDiv>
          <select
            className="selectpicker show-tick form-select form-select-md"
            value={roomType}
            onChange={handleRoomType}
            required
            id="roomType"
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
              type="email"
              className="form-control"
              id="email"
              value={email}
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
              value={startDate}
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
              onChange={handleNote}
              placeholder="Eklemek istedikleriniz.."
            />
          </div>
        </PairDiv>
        <RoomsButton
          onClick={() => {
            console.log(roomType);
          }}
          type="submit"
        >
          REZERVASYON OLUŞTUR
        </RoomsButton>
      </form>
    </Container>
  );
}

export default ReservationComponent;
