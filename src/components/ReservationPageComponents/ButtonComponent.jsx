import React from 'react'
import styled from 'styled-components';

export const RoomsButton = styled.button`
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
;
  &:hover {
    background-color: #fff;
    color: #deb666;
  }
`;

function ButtonComponent() {
  return (
    <RoomsButton>REZERVASYON OLUŞTUR</RoomsButton>
  )
}

export default ButtonComponent