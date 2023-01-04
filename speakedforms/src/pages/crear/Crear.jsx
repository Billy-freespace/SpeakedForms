import React from "react";
import TabsForm from "../../components/crear/TabsForm";
import TopForm from "../../components/crear/TopForm";
import OpcionMultiple from "../../components/formelements/OpcionMultiple";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Crear = ({ transc }) => {
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <OpcionMultiple/>
    </div>
  );
};

export default Crear;
