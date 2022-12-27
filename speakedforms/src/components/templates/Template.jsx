import React from "react";
import templateImage from "../../image/TemplateFormulario.jpg";
import nuevoImage from "../../image/NuevoFormulario.jpg";

const Template = () =>{
    return(
        <div className="template">
            <div className="template-top">
                <div className="template-left">
                    <span>Plantillas</span>
                </div>
            </div>
            <div className="template-body">
                <div className="card">
                    <img className="card-image" src={nuevoImage} alt="imagen de plantilla formulario"/>
                    <p className="card-title">En blanco</p>
                </div>
                <div className="card">
                    <img className="card-image" src={templateImage} alt="imagen de plantilla formulario"/>
                    <p className="card-title">Preguntas múltiples</p>
                </div>
                <div className="card">
                    <img className="card-image" src={templateImage} alt="imagen de plantilla formulario"/>
                    <p className="card-title">Encuesta</p>
                </div>
            </div>
        </div>
    )
}

export default Template;