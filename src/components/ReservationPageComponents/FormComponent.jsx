import React from "react";
import styled from "styled-components";
import FullNameComponent from "./FullNameComponent";
import RoomTypeComponent from "./RoomTypeComponent";
import ContactInfoComponent from "./ContactInfoComponent";
import DateComponent from "./DateComponent";
import PeopleCountComponent from "./PeopleCountComponent";
import NoteComponent from "./NoteComponent";
import ButtonComponent from "./ButtonComponent";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const Forms = styled.div`
  width: 30rem;
`;

function FormComponent() {
  return (
    <Container>
      <Forms>
        <RoomTypeComponent />
        <FullNameComponent />
        <ContactInfoComponent />
        <PeopleCountComponent />
        <DateComponent />
        <NoteComponent/>
        <ButtonComponent/>
      </Forms>
    </Container>
  );
}

export default FormComponent;
