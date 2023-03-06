import React, { useState } from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  @media only screen and (max-width: 758px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;
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
  width: 20rem;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;

function FormComponents() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");

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
  const handleNote = (event) => {
    setNote(event.target.value);
  };
  return (
    <FormDiv>
      <form>
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
        <RoomsButton type="submit">MESAJINI GÖNDER</RoomsButton>
      </form>
    </FormDiv>
  );
}

export default FormComponents;
