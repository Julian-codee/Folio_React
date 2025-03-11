import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./assets/components/Layouts/Header/Header";
import { Footer } from "./assets/components/Layouts/Footer/Footer";
import { Main } from "./assets/components/Layouts/Main/Main";

import React from "react";

export const App = () => {
  return (
    <>
      <div className="App">

        <Header />

        <Main />
        

        <Footer />

      </div>
    </>
  );
};
