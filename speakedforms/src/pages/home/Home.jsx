import React, {useState} from "react";
import fondo from "../../image/FondoEjemplo.jpg";
import {FaFileAlt} from "react-icons/fa";
import Template from "../../components/templates/Template";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";

const Home = () => {

    const history = useNavigate();

    const [files, setFiles] = useState([]);

    async function filesname(){
        var request = await axios.get("http://localhost:9000/get_all_filenames")
        let filenames = request.data;
        setFiles(filenames);
    }
    filesname();

    function navigate_to(docname){
        var fname =docname.split(".");
        history.push("/crear/"+ fname[0])
    }

    return(
        <div>
            <Sidebar/>
            <Topbar/>
            <div className="content">
            <Template/>
                <div className="down-content">
                    <div className="row">
                        {files.map((element)=>(
                            <div className="col-sm-3 mt-3">
                                <div className="card">
                                    <img className="card-img-top" src={fondo} alt="Card cap"/>
                                    <div className="card-body"  onClick={() =>{navigate_to(element)}}>
                                        <h5 className="card-title"><FaFileAlt/> {element}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
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