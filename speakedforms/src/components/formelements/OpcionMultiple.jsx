import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
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

  function preguntasUI() {
    return (
      <>
        <p>{transc}</p>
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
                      <input type="text" value={`${i + 1}.`} />
                      {/* {i + 1}. {preguntas[i].preguntaText} */}
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
                                label={<Typography>{op.optionText}</Typography>}
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

  return <div>{preguntasUI()}</div>;
}

export default OpcionMultiple;
