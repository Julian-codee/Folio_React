import "./App.css";
import { Header } from "./assets/components/Layouts/Header/Header";
import { Main } from "./assets/components/Layouts/Main/Main";
import { Myprojects } from "./assets/components/Layouts/Main/Myprojects";

import React from "react";
import { Routes, Route} from "react-router-dom";
import { Container } from "./assets/components/Container/Container";

export const App = () => {
  return (
    <>
   
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Myprojects />} />
          </Routes>
     
        </Container>
        
        
      </div>
    
    </>
  );
};
