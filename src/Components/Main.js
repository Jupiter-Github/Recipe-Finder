import React from "react";
import "./Main.css";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeInstruction from "./RecipeInstruction";
import { Routes, Route } from "react-router-dom";
import Favourite from "./Favourite";
import SearchList from "./SearchList";

const Main = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeInstruction/:id" element={<RecipeInstruction />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/SearchList" element={<SearchList />} />
      </Routes>
    </>
  );
};

export default Main;
