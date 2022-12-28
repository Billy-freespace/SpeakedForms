import React from "react";
import fondo from "../../image/FondoEjemplo.jpg";
import {FaFileAlt} from "react-icons/fa";
import Template from "../../components/templates/Template";

const Home = () => {

    return(
        <div>
            <div className="content">
            <Template/>
                <div className="down-content">
                    <div className="row">
                        <div className="col-sm-3 mt-3">
                            <div className="card">
                                <img className="card-img-top" src={fondo} alt="Card cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title"><FaFileAlt/> Formulario 1</h5>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm-3 mt-3">
                            <div className="card">
                                <img className="card-img-top" src={fondo} alt="Card cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><FaFileAlt/> Formulario 2</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;