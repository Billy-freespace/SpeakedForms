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

const keyWords = ["comando", "crear", "editar", "pregunta", "opción"];

function OpcionMultiple({ transc }) {
  const [preguntas, setPreguntas] = useState([]);

  // pregunta object model:
  // {
  //   preguntaText: "Capital de Perú:",
  //   preguntaTipo: "Radio",
  //   opciones: [
  //     { optionText: "Paris" },
  //     { optionText: "Lima" },
  //     { optionText: "Washington DC" },
  //     { optionText: "La Paz" },
  //   ],
  //   open: true,
  //   required: false,
  // },

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
    // const newTransc = transc;
    // const splittedTransc = newTransc.split(" ");
    // const lastWord = splittedTransc[splittedTransc.length - 1];
    // console.log(lastWord);
  };

  function preguntasUI(transc) {
    return (
      <>
        <input
          type="hidden"
          value={transc}
          onChange={() => handleOnChangeTranscript(transc)}
        />
        {transc}
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
                variant="outlined"
                onClick={() => handleNuevaOpcion(preg)}
              >
                Agregar Opción
              </Button>
            </Accordion>
          </div>
        ))}
        <Button
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

  return <div>{preguntasUI(transc)}</div>;
}

export default OpcionMultiple;
