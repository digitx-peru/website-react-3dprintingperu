import { useState } from "react";
import { useQuery } from "react-query";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MaterialListingTable from "../../Components/MaterialScreen/MaterialListingTable";
import MaterialFilterPanel from "../../Components/MaterialScreen/MaterialFilterPanel/MaterialFilterPanel";

import useMediaQuery from "../../hooks/useMediaQuery";

import { getMaterialsFromDB } from "../../utils/dataHandler";
import {
  printerFiltering,
  technologyFiltering,
  propertyFiltering,
} from "../../utils/filters";

export default function Materiales() {
  //States
  const [printerFilterCriteria, setPrinterFilter] = useState([]);
  const [technologyFilterCriteria, setTechnologyFilter] = useState([]);
  const [propertyFilterCriteria, setPropertyFilterCriteria] = useState({
    tensileModulus: {
      min: "",
      max: "",
    },
    elongationAtBreak: {
      min: "",
      max: "",
    },
    heatDistortionTemp182mpa: {
      min: "",
      max: "",
    },
  });

  //Screenwidth breakpoints
  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  //Puntos de quiebre para mostrar 3 y 4 impresoras en el grid
  const is1280 = useMediaQuery(1280);

  //Styling
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: isColumnLayoutWidth ? "column" : "row",
      // gap: isLargeScreen ? "20px" : "200px",
      padding: is1280 ? "15px" : "50px 50px",
      minHeight: isColumnLayoutWidth ? "auto" : "890px",
      alignItems: isColumnLayoutWidth ? "stretch" : "flex-start",
      justifyContent: "space-between",
    },
  };

  //Data material fetching
  const materialData = useQuery(["materialDataFetching"], getMaterialsFromDB, {
    select: (materialData) => {
      return (
        materialData.materials
          //Search filter
          .filter((material) =>
            printerFiltering(material, printerFilterCriteria)
          )
          .filter((material) =>
            technologyFiltering(material, technologyFilterCriteria)
          )
          .filter((material) =>
            propertyFiltering(material, propertyFilterCriteria)
          )
          .map((material) => {
            material.key = material.name;
            return material;
          })
      );
    },
  });

  //Event Handlers
  const printerFilterCheckBoxChangeHandler = (checkboxValue) => {
    setPrinterFilter(checkboxValue);
  };

  const technologyFilterCheckBoxChangeHandler = (checkboxValue) => {
    setTechnologyFilter(checkboxValue);
  };

  const propertyFilterInputChangeHandler = (
    property,
    minmax,
    onChangeEvent
  ) => {
    setPropertyFilterCriteria({
      ...propertyFilterCriteria,
      [property]: {
        ...propertyFilterCriteria[property],
        [minmax]: onChangeEvent.target.value,
      },
    });
  };

  return (
    <>
      <Header />
      <main className="mainContainer" style={styles.mainContainer}>
        <div className="filters" style={{ minWidth: 250 }}>
          <MaterialFilterPanel
            printerFilterCheckBoxChangeHandler={
              printerFilterCheckBoxChangeHandler
            }
            technologyFilterCheckBoxChangeHandler={
              technologyFilterCheckBoxChangeHandler
            }
            propertyFilterInputChangeHandler={propertyFilterInputChangeHandler}
          />
        </div>
        <div className="table" style={{ flexGrow: 1 }}>
          <MaterialListingTable data={materialData.data} />
        </div>
      </main>
      <Footer />
    </>
  );
}
