import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Crear from "./pages/crear/Crear";

function App() {

    return(
        <div className="App">
            <Home/>
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