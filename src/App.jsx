import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import BudgetPages from "./pages/BudgetPages";
import Info from "../src/components/AppInfo/AppInfo.jsx";
import Biografia from "../src/components/AppBiografia/AppBiografia.jsx";
import Clase from "../src/components/AppClases/AppClases.jsx";
import Agenda from "../src/components/AppAgenda/AppAgenda.jsx";
import Home from "../src/components/AppHome/AppHome.jsx"

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BudgetPages/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/biografia" element={<Biografia/>}/>
          <Route path="/clases" element={<Clase/>}/>
          <Route path="/reserva" element={<Agenda/>}/>
        </Routes>
      </div>
    
    </React.Fragment>
    
  )
}

export default App
