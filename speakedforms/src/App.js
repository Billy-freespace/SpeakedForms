import React, { useState } from "react";
import Login from "./pages/login/Login";
import Crear from "./pages/crear/Crear";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [transc, setTransc] = useState("");

  const pullTransc = (tr) => {
    setTransc(tr);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/crear/:id" element={<Crear transc={transc} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
