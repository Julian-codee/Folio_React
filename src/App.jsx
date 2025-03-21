// Importamos los estilos de la aplicación
import "./App.css";

// Importamos los componentes de la aplicación
import { Header } from "./assets/components/Layouts/Header/Header";
import { Main } from "./assets/components/Layouts/Main/Main";
import { Myprojects } from "./assets/components/Layouts/Main/Myprojects";

// Importamos el componentes react-Router-Dom
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Container } from "./assets/components/Container/Container";

export const App = () => {
  return (
    <>

    {/*Clase App.jsx*/}
   
      <div className="App">

        {/*Header, react-router para cambio de paginas*/}

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
