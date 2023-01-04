import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  Box,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import {FaFileAlt} from "react-icons/fa";
import SpeechRecognition,{ useSpeechRecognition } from "react-speech-recognition";
import { AudioOutlined} from '@ant-design/icons';
import axios from 'axios';
import { useParams } from "react-router";

function OpcionMultiple({ transc }) {
  const {id} = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [documentName, setDocName] = useState("Untitled");

  const commands = [
    {
      command: 'Agregar pregunta',
      callback: () => {document.getElementById('btnAgregarPregunta').click()}
    },
    {
      command: 'Agregar opción a pregunta *',
      callback: (numberQuestion) => {document.getElementById(`btnAgregarOpcion${numberQuestion}`).click()}
    },
    {
      command: "Ir al inicio",
      callback: () => {window.scroll(0,0)}
    }
  ]

  const AudioStyle = {
    padding: "5px",
    color: '#000000',
    fontSize: '30px',
    cursor: 'pointer',
  }


  const handleNuevaPregunta = (preg) => {
    setPreguntas([...preguntas, preg]);
  };

  const handleNuevaOpcion = (preg) => {
    preg.opciones.push({ optionText: "" });
    setPreguntas([...preguntas]);
  };

  const handlePreguntaText = (preg, text) => {
    preg.preguntaText = text;
    setPreguntas([...preguntas]);
  };

  const handleOptionText = (op, text) => {
    op.optionText = text;
    setPreguntas([...preguntas]);
  };

  const setRespuestaOption = (preg,qno) =>{
    var ps = [...preguntas];
    ps[qno].respuestaKey = preg;
    setPreguntas(ps);
  }


  const doneRespuesta = (i) =>{
    var aoq = [...preguntas];
    aoq[i].respuesta = !aoq[i].respuesta;
    setPreguntas(aoq);
  }

  const addRespuesta = (i) =>{
    var aoq = [...preguntas];
    aoq[i].respuesta = !aoq[i].respuesta;
    setPreguntas(aoq);
  }

  const handleOnChangeTranscript = (transc) => {
  };

  const {transcript,
    listening,
    browserSupportsSpeechRecognition} = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
  }



  const changeListening = () =>{
      if(listening){
        SpeechRecognition.stopListening();
      }else{
        SpeechRecognition.startListening({continuous: true});
      }
  }

  const commitToDB = () =>{
    axios.post(`http://localhost:9000/add_preguntas/${id}`,{
      "document_name": documentName,
      "preguntas": preguntas,
    })
    
  }


  function preguntasUI(transc) {

    return (
      <>
        <div className="topForm">
            <div className="form-title">
                <FaFileAlt size={20}/>
                <input type="text" placeholder="Untitled" className="form-name" onChange={(e) => {setDocName(e.target.value)}}/>
            </div>
        </div>
        <p><AudioOutlined style={AudioStyle} onClick={changeListening}/> Microfono: {listening ? 'Encendido' : 'Apagado'}</p>
        <input
          type="hidden"
          value={transc}
          onChange={() => handleOnChangeTranscript(transc)}
        />
        {preguntas.map((preg, i) => (
          <div key={[i]}>
            <Accordion
              style={{margin: "10px"}}
              expanded={preguntas[i].open}
              className={preguntas[i].open ? "add border" : ""}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-content"
                elevation={1}
                style={{ width: "95%" }}
              >
                {preguntas[i].open ? (
                  <div className="guardar_preguntas">
                    <Typography>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": {
                            ml: 5,
                            mb: 4,
                            width: "90ch",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            id="standard-multiline-flexible"
                            label={i + 1 + "."}
                            multiline
                            autoFocus
                            maxRows={5}
                            variant="standard"
                            value={preguntas[i].preguntaText}
                            onChange={(e) =>
                              handlePreguntaText(preg, e.target.value)
                            }
                          />
                        </div>
                      </Box>
                    </Typography>
                    <FormControl>
                      <RadioGroup defaultValue={undefined}>
                        {preg.opciones.map((op, j) => (
                          <div key={[j]}>
                            <div>
                              <FormControlLabel
                                // disabled
                                value={j}
                                control={<Radio />}
                                label={
                                  <Typography>
                                    <Box
                                      component="form"
                                      sx={{
                                        "& .MuiTextField-root": {
                                          ml: 5,
                                          mb: 3,
                                          width: "60ch",
                                        },
                                      }}
                                      noValidate
                                      autoComplete="off"
                                    >
                                      <div>
                                        <TextField
                                          id="standard-multiline-flexible"
                                          label={j + 1 + "."}
                                          multiline
                                          autoFocus
                                          maxRows={8}
                                          variant="standard"
                                          value={op.optionText}
                                          onChange={(e) =>
                                            handleOptionText(op, e.target.value)
                                          }
                                        />
                                      </div>
                                    </Box>
                                  </Typography>
                                }
                              />
                              <Button onClick={() => {setRespuestaOption(preg.opciones[j].optionText, i)}}>
                                Seleccionar como respuesta
                              </Button>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </div>
                ) : (
                  ""
                )}
              </AccordionSummary>
              <Button
                id={`btnAgregarOpcion${i+1}`}
                variant="outlined"
                onClick={() => handleNuevaOpcion(preg)}
                hidden
              >
                Agregar Opción
              </Button>
              <Button onClick={() => {addRespuesta(i)}}>
                Agregar Respuesta
              </Button>
            </Accordion>
          </div>
        ))}
        <Button
          id="btnAgregarPregunta"
          variant="outlined"
          onClick={() => {
            handleNuevaPregunta({
              preguntaText: "",
              preguntaTipo: "Radio",
              respuesta: false,
              respuestaKey: "",
              puntos: 0,
              opciones: [],
              open: true,
              required: false,
            });
          }}
          hidden
        >
          Agregar Pregunta
        </Button>

      </>
    );
  }

  return (  
    <div className="contenido">
        {preguntasUI(transc)}
        <Button
          variant="outlined"
          color="primary"
          onClick={commitToDB}>
          Guardar
        </Button>
    </div>);
}

export default OpcionMultiple;
