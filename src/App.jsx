import React from "react";
import { Route, Routes } from "react-router-dom";
import Communication from "./pages/Communication";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Rooms from "./pages/Rooms";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="reservation" element={<Reservation />} />
      <Route path="communication" element={<Communication />} />
    </Routes>
  );
}
