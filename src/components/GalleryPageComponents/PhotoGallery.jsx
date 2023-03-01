import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
  & img:hover {
    opacity: 1;
    transform: translate(0,-30px);
    transition: all 0.6s ease-in-out;
    box-shadow: 20px 20px 20px #606060;
    cursor: pointer;
  }
`;

const itemData = [
  {
    img: "pictures/oda1.jpg",
    title: "room1",
  },
  {
    img: "pictures/oda2.jpg",
    title: "room2",
  },
  {
    img: "pictures/standart.jpg",
    title: "standart room",
  },
  {
    img: "pictures/double.jpg",
    title: "double room",
  },
  {
    img: "pictures/triple.jpg",
    title: "triple room",
  },
];

function PhotoGallery() {
  return (
    <Container>
      <ImageList sx={{ width: 400, height: 700 }} cols={1} rowHeight={350}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default PhotoGallery;
