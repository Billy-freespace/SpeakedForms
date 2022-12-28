import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";

const TabsForm = () =>{
    return(
        <Paper>
            <Tabs textColor="primary" indicatorColor="primary" centered>
                <Tab label="Preguntas">
                </Tab>
                <Tab label="Respuestas">
                </Tab>
                <Tab label="Configuracion">
                </Tab>
            </Tabs>
        </Paper>
    )
}

export default TabsForm;