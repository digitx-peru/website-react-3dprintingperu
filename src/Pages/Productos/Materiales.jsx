import { useState } from "react";
import { useQuery } from "react-query";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MaterialListingTable from "../../Components/MaterialScreen/MaterialListingTable";
import MaterialFilterPanel from "../../Components/MaterialScreen/MaterialFilterPanel/MaterialFilterPanel";

import useMediaQuery from "../../hooks/useMediaQuery";

import { getMaterialsFromDB } from "../../utils/dataHandler";

import {
  smallScreenSize,
  mediumScreenSize,
} from "../../style/screenSizes";

export default function Materiales() {
  //States
  const [propertyFilterTensileModulusMin, setPropertyFilterTensileModulusMin] =
    useState("");
  const [propertyFilterTensileModulusMax, setPropertyFilterTensileModulusMax] =
    useState("");
  const [printerFilter, setPrinterFilter] = useState([]);
  const [technologyFilter, setTechnologyFilter] = useState([]);

  //Screenwidth breakpoints
  const isSmallScreenSize = useMediaQuery(smallScreenSize);
  const isMediumScreenSize = useMediaQuery(mediumScreenSize);

  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024)

  //Puntos de quiebre para mostrar 3 y 4 impresoras en el grid
  const is1280 = useMediaQuery(1280)
  const is1580 = useMediaQuery(1580)

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

  // //Data material fetching
  // const { data } = useQuery(["materialDataFetching"], getMaterialsFromDB, {
  //   select: (materialData) => {
  //     return (
  //       materialData.materials
  //         //Search filter
  //         .filter((material) => {
  //           if (printerFilter.length !== 0) {
  //             const result = material.printers.some((materialPrinter) =>
  //               printerFilter.includes(materialPrinter)
  //             );
  //             return result;
  //           }
  //           return material;
  //         })
  //         .filter((material) =>
  //           technologyFilter.length !== 0
  //             ? technologyFilter.includes(material.technology)
  //             : material
  //         )
  //         .filter((material) => {
  //           return propertyFilterTensileModulusMin
  //             ? parseFloat(propertyFilterTensileModulusMin).toFixed(1) >=
  //                 material.tensileModulus.min &&
  //                 parseFloat(propertyFilterTensileModulusMin).toFixed(1) <=
  //                   material.tensileModulus.max
  //             : true;
  //         })
  //         .filter((material) => {
  //           return propertyFilterTensileModulusMax
  //             ? parseFloat(propertyFilterTensileModulusMax).toFixed(1) <=
  //                 material.tensileModulus.max
  //             : true;
  //         })
  //         .map((material) => {
  //           material.key = material.name;
  //           return material;
  //         })
  //     );
  //   },
  // });

    //Data material fetching
    const materialData = useQuery(["materialDataFetching"], getMaterialsFromDB, {
      select: (materialData) => {
        return (
          materialData.materials
            //Search filter
            .filter((material) => {
              if (printerFilter.length !== 0) {
                const result = material.printers.some((materialPrinter) =>
                  printerFilter.includes(materialPrinter)
                );
                return result;
              }
              return material;
            })
            .filter((material) =>
              technologyFilter.length !== 0
                ? technologyFilter.includes(material.technology)
                : material
            )
            .filter((material) => {
              return propertyFilterTensileModulusMin
                ? parseFloat(propertyFilterTensileModulusMin).toFixed(1) >=
                    material.tensileModulus.min &&
                    parseFloat(propertyFilterTensileModulusMin).toFixed(1) <=
                      material.tensileModulus.max
                : true;
            })
            .filter((material) => {
              return propertyFilterTensileModulusMax
                ? parseFloat(propertyFilterTensileModulusMax).toFixed(1) <=
                    material.tensileModulus.max
                : true;
            })
            .map((material) => {
              material.key = material.name;
              return material;
            })
        );
      },
    });

  //Event Handlers
  const onPrinterCheckBoxChange = (checkboxValue) => {
    setPrinterFilter(checkboxValue);
  };

  const onTechnologyCheckBoxChange = (checkboxValue) => {
    setTechnologyFilter(checkboxValue);
  };

  const onIndustryCheckBoxChange = (checkboxValue) => {
    setPrinterFilter([...printerFilter, checkboxValue]);
  };

  const onApplicationCheckBoxChange = (checkboxValue) => {
    setPrinterFilter([...printerFilter, checkboxValue]);
  };

  const onMaterialTypeCheckBoxChange = (checkboxValue) => {
    setPrinterFilter([...printerFilter, checkboxValue]);
  };

  const onPropertyFilterTextChanged = (property, minmax, onChangeEvent) => {
    if (property === "tensileModulus" && minmax === "min") {
      setPropertyFilterTensileModulusMin(onChangeEvent.target.value);
    }
    if (property === "tensileModulus" && minmax === "max") {
      setPropertyFilterTensileModulusMax(onChangeEvent.target.value);
    }
  };

  // console.log(data)

  return (
    <>
      <Header />
      <main className="mainContainer" style={styles.mainContainer}>
        <div className="filters" style={{ minWidth: 250 }}>
          <MaterialFilterPanel
            printerCheckBoxChange={onPrinterCheckBoxChange}
            technologyCheckBoxChange={onTechnologyCheckBoxChange}
            applicationCheckBoxChange={onApplicationCheckBoxChange}
            industryCheckBoxChange={onIndustryCheckBoxChange}
            materialTypeCheckBoxChange={onMaterialTypeCheckBoxChange}
            propertyFilterTextChanged={onPropertyFilterTextChanged}
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
