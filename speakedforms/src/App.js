import React, { useState } from "react";
import Crear from "./pages/crear/Crear";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import OpcionMultiple from "./components/formelements/OpcionMultiple";

function App() {
  const [transc, setTransc] = useState("");

  const pullTransc = (tr) => {
    setTransc(tr);
  };

  return (
    <div className="App">
      <Router>
        <Topbar func={pullTransc} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/crear/:id" element={<Crear transc={transc} />}></Route>
        </Routes>
      </Router>
      {/* <Crear/> */}
    </div>
    // <Router>
    //     <div className="homeBody">
    //         <Sidebar/>
    //         <div className="content w-100">
    //             <Routes>
    //                 <Route path='/' element={<Home/>} exact/>
    //                 <Route path='/crear' element={<Crear/>} exact/>
    //                 <Route path='/login' element={<Login/>} exact/>
    //             </Routes>
    //         </div>
    //     </div>
    // </Router>
  );
}

export default App;
