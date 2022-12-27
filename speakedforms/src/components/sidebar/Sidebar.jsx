import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../image/Logo.png";
import profilePicture from "../../image/FotoPerfil.jpg";
import {FaHome,FaPlus} from "react-icons/fa";

const Sidebar = () => {
    return(
            <div className="sidebar">
                <img className="logo" alt="SpeakedFormLogo" src={logo}/>
                <div className="profile-bar">
                    <img className="profile-picture" alt="profilePicture" src={profilePicture}/>
                    <p className="profile-name">Harry Potter</p>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" className="text-light rounded py-2 w-100 d-inline-block px-3"><FaHome className="me-2"/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/crear" className="text-light rounded py-2 w-100 d-inline-block px-3"><FaPlus className="me-2"/>Crear</NavLink>
                    </li>
                    <li className="logout">
                        <NavLink to="/login" className="text-light rounded py-2 w-100 d-inline-block px-3">Cerrar sesión</NavLink>
                    </li>
                </ul>
            </div>
    )
}

export default Sidebar;