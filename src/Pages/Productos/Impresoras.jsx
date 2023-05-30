import { useQuery } from "react-query";
import { useState } from "react";

import { Collapse, Checkbox, Table, Card } from "antd";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import db from "../../printerDb.json";

const { Panel } = Collapse;

//Get Materials
function getMaterials() {
  fetch("http://localhost:3000/printers").then((response) => response.json());
}

function getPrintersFromDB() {
  return db.printers;
}

//Secondary Components
function PrinterCard({ name, description, software, price }) {

  console.log(name)
  console.log(description)
  console.log(software)
  console.log(price)

  return (
    <Card>
      <div style={styles.printerCardContent}>
        <img src="https://picsum.photos/300/150" alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <div style={{display: 'flex', flexDirection: 'row', gap: 50}}>
          <div>
            <h3>Software</h3>
            <p>{software}</p>
          </div>
          <div>
            <h3>Precio Ref</h3>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

//Main component
export default function Impresoras() {
  // const { isLoading, data } = useQuery(
  //   "fetchMaterials",
  //   getMaterialsFromDB()
  // );

  const [searchFilter, setSearchFilter] = useState("");
  const [printerFilter, setPrinterFilter] = useState([]);
  const [technologyFilter, setTechnologyFilter] = useState([]);
  const [industryFilter, setIndustryFilter] = useState([]);
  const [applicationFilter, setApplicationFilter] = useState([]);
  const [materialTypeFilter, setMaterialTypeFilter] = useState([]);

  //Check if all filters are off (false). Returns true if all false, and false if any of the categories is active.
  // const allFilterAreOff =
  //   printerFilter.length === 0 && technologyFilter.length === 0;

  const data = getPrintersFromDB();
  console.log(data)
  // const filteredData = data
  //   .filter((material) =>
  //     material.printers.some((materialPrinter) =>
  //       printerFilter.includes(materialPrinter)
  //     )
  //   )
  //   .filter((material) =>
  //     technologyFilter.length !== 0
  //       ? technologyFilter.includes(material.technology)
  //       : material
  //   );

  const printerOptions = [
    { label: "DMP Factory 350", value: "DMP Factory 350" },
    { label: "DMP Factory 500 Solution", value: "DMP Factory 500 Solution" },
    { label: "ProJet MJP 2500", value: "ProJet MJP 2500" },
    { label: "ProJet MJP 2500 Plus", value: "ProJet MJP 2500 Plus" },
  ];
  const techOptions = [
    { label: "ColorJet Printing", value: "CJP" },
    { label: "Direct Light Processing", value: "DLP" },
    { label: "Direct Metal Printing", value: "DMP" },
    { label: "Extrusion", value: "Extrusion" },
    { label: "MultiJet Printing", value: "MJP" },
  ];
  const industryOptions = [
    { label: "ColorJet Printing", value: "CJP" },
    { label: "Direct Light Processing", value: "DLP" },
    { label: "Direct Metal Printing", value: "DMP" },
    { label: "Extrusion", value: "Extrusion" },
    { label: "MultiJet Printing", value: "MJP" },
  ];
  const applicationOptions = [
    { label: "ColorJet Printing", value: "CJP" },
    { label: "Direct Light Processing", value: "DLP" },
    { label: "Direct Metal Printing", value: "DMP" },
    { label: "Extrusion", value: "Extrusion" },
    { label: "MultiJet Printing", value: "MJP" },
  ];
  const materialTypeOptions = [
    { label: "ABS", value: "Apple" },
    { label: "Aleacion de aluminio", value: "Pear" },
    { label: "Cromo-cobalto", value: "Orange" },
  ];

  function onPrinterCheckBoxChange(checkboxValue) {
    setPrinterFilter(checkboxValue);
  }

  function onTechnologyCheckBoxChange(checkboxValue) {
    setTechnologyFilter(checkboxValue);
  }

  function onIndustryCheckBoxChange(checkboxValue) {
    setPrinterFilter([...printerFilter, checkboxValue]);
  }

  function onApplicationCheckBoxChange(checkboxValue) {
    setPrinterFilter([...printerFilter, checkboxValue]);
  }

  function onMaterialTypeCheckBoxChange(checkboxValue) {
    setPrinterFilter([...printerFilter, checkboxValue]);
  }

  return (
    <>
      <Header />
      <main style={styles.mainContainer}>
        <div className="filters" style={{ minWidth: 250 }}>
          <Collapse
            defaultActiveKey={["1"]}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <Panel header="Impresora" key="1">
              <div>
                <Checkbox.Group
                  options={printerOptions}
                  style={{ display: "flex", flexDirection: "column" }}
                  onChange={onPrinterCheckBoxChange}
                />
              </div>
            </Panel>
            <Panel header="Tecnologia" key="2">
              <div>
                <Checkbox.Group
                  options={techOptions}
                  style={{ display: "flex", flexDirection: "column" }}
                  onChange={onTechnologyCheckBoxChange}
                />
              </div>
            </Panel>
            <Panel header="Industria" key="3">
              <div>
                <Checkbox.Group
                  options={industryOptions}
                  style={{ display: "flex", flexDirection: "column" }}
                  onChange={onIndustryCheckBoxChange}
                />
              </div>
            </Panel>
            <Panel header="Aplicacion" key="4">
              <div>
                <Checkbox.Group
                  options={applicationOptions}
                  style={{ display: "flex", flexDirection: "column" }}
                  onChange={onApplicationCheckBoxChange}
                />
              </div>
            </Panel>
            <Panel header="Tipo de material" key="5">
              <div>
                <Checkbox.Group
                  options={materialTypeOptions}
                  style={{ display: "flex", flexDirection: "column" }}
                  onChange={onMaterialTypeCheckBoxChange}
                />
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="table">
          {data.map(printer => {
            return (
              <PrinterCard name={printer.name} description={printer.description} software={printer.software} price={printer.refPrice}/>
            )
          })}
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
  table: {},
  tableCell: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "Left",
    fontSize: 14,
  },
  newsCardContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
  },
  printerCardContent: {
    padding: 25,
    width: 400,
  },
  softPriceContainer: {},
};
