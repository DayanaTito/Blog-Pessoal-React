import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import "./App.css";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
