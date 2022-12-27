import React from "react";
import fondo from "../../image/FondoEjemplo.jpg";
import {FaPlus} from "react-icons/fa";

const Home = () => {
    return(
        <div className="content">
            <div className="top-content row">
                <div className="col-sm-2 m-2">
                    <div className="card">
                        <p className="card-header text-center"><FaPlus/></p>
                        <h6 className="card-title"> Crear</h6>                        
                    </div>
                </div>
            </div>
            <div className="down-content">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={fondo} alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Formulario 1</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <img className="card-img-top" src={fondo} alt="Card cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Formulario 2</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;