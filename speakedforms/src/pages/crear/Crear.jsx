import React from "react";
import TabsForm from "../../components/crear/TabsForm";
import TopForm from "../../components/crear/TopForm";
import OpcionMultiple from "../../components/formelements/OpcionMultiple";

const Crear= () => {
    return(
        <div>
            <TopForm/>
            <TabsForm/>
            <OpcionMultiple/>
        </div>

    )
}

export default Crear;