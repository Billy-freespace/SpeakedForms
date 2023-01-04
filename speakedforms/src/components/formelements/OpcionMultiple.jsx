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
import SpeechRecognition,{ useSpeechRecognition } from "react-speech-recognition";
import { AudioOutlined} from '@ant-design/icons';

function OpcionMultiple({ transc }) {
  const [preguntas, setPreguntas] = useState([]);
  const [message, setMessage] = useState('');

  const commands = [
    {
      command: 'Agregar pregunta',
      callback: () => {document.getElementById('btnAgregarPregunta').click()}
    },
    {
      command: 'Agregar opción',
      callback: () => {document.getElementById('btnAgregarOpcion').click()}
    }
  ]

  const AudioStyle = {
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

  const handleOnChangeTranscript = (transc) => {
  };

  const {transcript,
    listening,
    browserSupportsSpeechRecognition} = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
  }



  const start = () =>{
    console.log({listening})
    if({listening}){
      SpeechRecognition.startListening();
      console.log({listening})
    }
    else{
      SpeechRecognition.stopListening();
    }
  }

  function preguntasUI(transc) {

    return (
      <>
        
        <p><AudioOutlined style={AudioStyle} onClick={start}/> Microfono: {listening ? 'Encendido' : 'Apagado'}</p>
        <input
          type="hidden"
          value={transc}
          onChange={() => handleOnChangeTranscript(transc)}
        />
        {preguntas.map((preg, i) => (
          <div key={[i]}>
            <Accordion
              expanded={preguntas[i].open}
              className={preguntas[i].open ? "add border" : ""}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-content"
                elevation={1}
                style={{ width: "100%" }}
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
                            width: "140ch",
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
                            maxRows={8}
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
                                          width: "120ch",
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
                id="btnAgregarOpcion"
                variant="outlined"
                onClick={() => handleNuevaOpcion(preg)}
              >
                Agregar Opción
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
              opciones: [],
              open: true,
              required: false,
            });
          }}
        >
          Agregar Pregunta
        </Button>
      </>
    );
  }

  return <div className="contenido">{preguntasUI(transc)}</div>;
}

export default OpcionMultiple;
