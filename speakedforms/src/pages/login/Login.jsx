import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    let [authMode, setAuthMode] = useState("signin");
    let navigate = useNavigate();

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
      }

    const GoHome  = () =>{
            navigate('/home');
      }
    

    if(authMode === "signin") {
        return(
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="text-center">
                        ¿No está registrado aún?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Registrarme
                        </span>
                        </div>
                        <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value="usuario_prueba@hotmail.com"
                        />
                        </div>
                        <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value="P@ssword"
                        />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                        <button onClick={() => GoHome()} type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                        </div>
                        <p className="text-center mt-2">
                        ¿Olvidó la <a href="#">contraseña</a>?
                        </p>
                    </div>
                </form>
          </div>
        )
    }
    return(
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Registro</h3>
                <div className="text-center">
                    ¿Posee una cuenta?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                    Login
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Nombre completo</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="e.g Jane Doe"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Email</label>
                    <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Contraseña</label>
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                    Registrarme
                    </button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Login;