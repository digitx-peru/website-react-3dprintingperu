import { useState } from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MaterialListingTable from "../../Components/MaterialScreen/MaterialListingTable";
import MaterialFilterPanel from "../../Components/MaterialScreen/MaterialFilterPanel/MaterialFilterPanel";

import { getMaterialsFromDB } from "../../utils/dataHandler";

export default function Materiales() {
  //States
  const [propertyFilterTensileModulusMin, setPropertyFilterTensileModulusMin] =
    useState("");
  const [propertyFilterTensileModulusMax, setPropertyFilterTensileModulusMax] =
    useState("");
  const [printerFilter, setPrinterFilter] = useState([]);
  const [technologyFilter, setTechnologyFilter] = useState([]);

  //Data Handling
  //Check if all filters are off (false). Returns true if all false, and false if any of the categories is active.
  const allFilterAreOff =
    printerFilter.length === 0 &&
    technologyFilter.length === 0 &&
    propertyFilterTensileModulusMin === "" &&
    propertyFilterTensileModulusMax === "";

  const data = getMaterialsFromDB();
  const filteredData = data
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

  return (
    <>
      <Header />
      <main style={styles.mainContainer}>
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
          <MaterialListingTable data={allFilterAreOff ? data : filteredData} />
        </div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 200,
    padding: 50,
    paddingLeft: 100,
    paddingRight: 100,
    minHeight: 890,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
};
