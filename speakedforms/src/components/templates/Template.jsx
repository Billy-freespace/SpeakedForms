import React from "react";
import templateImage from "../../image/TemplateFormulario.jpg";
import EncuestaTemplate from "../../image/Encuesta.jpg";
import nuevoImage from "../../image/NuevoFormulario.jpg";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

const Template = () =>{

    let navigate = useNavigate();

    const CreateForm = () =>{
        const id = uuid();
        navigate('/crear/'+id);
    }

    return(
        <div className="template">
            <div className="template-top">
                <div className="template-left">
                    <span>Plantillas</span>
                </div>
            </div>
            <div className="template-body">
                <div className="card" onClick={CreateForm}>
                    <img className="card-image" src={nuevoImage} alt="imagen de plantilla formulario"/>
                    <p className="card-title">En blanco</p>
                </div>
                <div className="card">
                    <img className="card-image" src={templateImage} alt="imagen de plantilla formulario"/>
                    <p className="card-title">Preguntas múltiples</p>
                </div>
                <div className="card">
                    <img className="card-image" src={EncuestaTemplate} alt="imagen de plantilla formulario"/>
                    <p className="card-title">Encuesta</p>
                </div>
            </div>
        </div>
    )
}

export default Template;