import { useQuery } from "react-query";
import { useState } from "react";

import { Collapse, Checkbox, Table } from "antd";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import db from "../../database.json";

const { Panel } = Collapse;

//Get Materials
function getMaterialsFromDB() {
  fetch('http://35.173.242.21:8000/materials/').then((response) => response.json());
}

// function getMaterialsFromDB() {
//   return db.materials;
// }

//Secondary Components
const mainColumns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    width: 200,
  },
  {
    title: "Descripcion",
    dataIndex: "description",
    key: "description",
    width: 700,
  },
  {
    title: "Ficha",
    dataIndex: "brochureUrl",
    key: "brochureUrl",
    width: 200,
  },
];

const ExpansionTable = ({ record }) => {
  return (
    <table className="materialDetailTable">
      <tbody>
        <tr>
          <td>Density (g/cm³)</td>
          <td className="valueCell">{record["density_g/cm3"] ?? "-"}</td>
          <td className="leftPaddingCell">Impact Strength (J/m)</td>
          <td className="valueCell">{record.impactStrength?.min ?? "-"}</td>
        </tr>
        <tr>
          <td>Tensile Strength</td>
          <td className="valueCell">{record.tensileStrength?.min ?? "-"}</td>
          <td className="leftPaddingCell">Tensile Modulus</td>
          <td className="valueCell">{record.tensileModulus?.min ?? "-"}</td>
        </tr>
        <tr>
          <td>Shore-D Hardness</td>
          <td className="valueCell">{record.shoreDHardness?.min ?? "-"}</td>
          <td className="leftPaddingCell">Elongation At Break</td>
          <td className="valueCell">{record.elongationAtBreak?.min ?? "-"}</td>
        </tr>
        <tr>
          <td>Heat Distortion Temp @045mpa</td>
          <td className="valueCell">{record.heatDistortionTemp045mpa?.min ?? "-"}</td>
          <td className="leftPaddingCell">Heat Distortion Temp @182mpa</td>
          <td className="valueCell">{record.heatDistortionTemp182mpa?.min ?? "-"}</td>
        </tr>
        <tr>
          <td>Flexural Modulus</td>
          <td className="valueCell">{record.flexuralModulus?.min ?? "-"}</td>
          <td className="leftPaddingCell">Flexural Strength</td>
          <td className="valueCell">{record.flexuralStrength?.min ?? "-"}</td>
        </tr>
        <tr>
          <td>Water Absorption (24hrs)</td>
          <td className="valueCell">{record.waterAbsorption_24hrs ?? "-"}</td>
          <td className="leftPaddingCell">Composition</td>
          <td className="valueCell">{record.composition ?? "-"}</td>
        </tr>
        <tr>
          <td>UL Flammability</td>
          <td className="valueCell">{record.ULFlammability ?? "-"}</td>
          <td className="leftPaddingCell">Bottle Size (kg)</td>
          <td className="valueCell">{record.bottleQuantity_kg ?? "-"}</td>
        </tr>
      </tbody>
    </table>
  );
};

//Main component
export default function Materiales() {
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
  const allFilterAreOff =
    printerFilter.length === 0 && technologyFilter.length === 0;

  const data = getMaterialsFromDB();
  const filteredData = data
    // .filter((material) =>
    //   material.printers.some((materialPrinter) =>
    //     printerFilter.includes(materialPrinter)
    //   )
    // )
    // .filter((material) =>
    //   technologyFilter.length !== 0
    //     ? technologyFilter.includes(material.technology)
    //     : material
    // );

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
        <div className="table" style={{ flexGrow: 1 }}>
          <Table
            columns={mainColumns}
            expandable={{
              expandedRowRender: (record) => <ExpansionTable record={record} />,
            }}
            dataSource={allFilterAreOff ? data : filteredData}
          />
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
};
