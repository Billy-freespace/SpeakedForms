import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";

function OpcionMultiple() {
  const [preguntas, setPreguntas] = useState([
    {
      preguntaText: "Capital de Perú:",
      preguntaTipo: "Radio",
      opciones: [
        { optionText: "Paris" },
        { optionText: "Lima" },
        { optionText: "Washington DC" },
        { optionText: "La Paz" },
      ],
      open: true,
      required: false,
    },
  ]);

  function preguntasUI() {
    return (
      <>
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
                      {i + 1}. {preguntas[i].preguntaText}
                    </Typography>
                    <FormControl>
                      <RadioGroup defaultValue={""}>
                        {preg.opciones.map((op, j) => (
                          <div key={[j]}>
                            <div>
                              <FormControlLabel
                                // disabled
                                value={op.optionText}
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
            </Accordion>
          </div>
        ))}
      </>
    );
  }

  return <div>{preguntasUI()}</div>;
}

export default OpcionMultiple;
