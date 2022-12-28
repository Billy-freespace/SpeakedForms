import React from "react";
import {FaSearch,FaRegQuestionCircle} from "react-icons/fa";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";


const Topbar = () => {

    const {
        transscript,
        listening,
        resetTranssript,
        browserSupportsSpeechRecognition
    }   = useSpeechRecognition();

    
    if(!browserSupportsSpeechRecognition){
        return <span>El navegador no soporta</span>
    }

    const Encender = (e) =>{
        SpeechRecognition.startListening();

    }

    const Apagar = () =>{
        SpeechRecognition.stopListening();
    }
    
    return(
        <div className="topbar">
           <div className="input-group m-4">
                <div id="search-autocomplete" className="form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Buscar"/>
                </div>
                <button type="button" className="btn">
                    <FaSearch/>
                </button>
            </div>
            <ul className="m-2">
                <li>
                    <p>Microfono: {listening ? 'Encendido' : 'Apagado'}</p>
                </li>
                <li>
                    <button className={listening ? 'invisible': 'Encendido'} onClick={Encender}>On</button>
                    <button className={listening ? 'Apagado': 'invisible'} onClick={Apagar}>Apagar</button>
                </li>
                <li>
                    <FaRegQuestionCircle size={25}/>
                </li>
            </ul>
        </div>
    )
}

export default Topbar;