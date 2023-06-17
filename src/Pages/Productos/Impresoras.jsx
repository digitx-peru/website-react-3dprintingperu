import { useQuery } from "react-query";
import { useState } from "react";

import { Collapse, Checkbox, Table, Card, List, Input, Pagination } from "antd";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import db from "../../printerDb.json";

const { Panel } = Collapse;

// Get Materials
// function getPrintersFromDB() {
//   fetch("http://localhost:3000/printers").then((response) => response.json());
// }

function getPrintersFromDB() {
  return db.printers;
}

//Secondary Components
function PrinterCard({ name, description, software, price }) {
  return (
    <div style={styles.printerCardContent}>
      <img
        src="https://picsum.photos/300/150"
        alt=""
        style={styles.printerCardImage}
      />
      <div style={styles.printerCardInfoContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
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
    </div>
  );
}

//Main component
export default function Impresoras() {
  // const { isLoading, data } = useQuery(
  //   "fetchMaterials",
  //   getMaterialsFromDB()
  // );

  const [searchFilterX, setSearchFilterX] = useState("");
  const [searchFilterY, setSearchFilterY] = useState("");
  const [searchFilterZ, setSearchFilterZ] = useState("");
  const [technologyFilter, setTechnologyFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [applicationFilter, setApplicationFilter] = useState([]);
  const [materialTypeFilter, setMaterialTypeFilter] = useState([]);

  //Check if all filters are off (false). Returns true if all false, and false if any of the categories is active.
  const allFilterAreOff =
    // technologyFilter.length === 0 && brandFilter.length === 0;
    technologyFilter.length === 0 &&
    searchFilterX == "" &&
    searchFilterY == "" &&
    searchFilterZ == "";

  const data = getPrintersFromDB();
  const filteredData = data
    .filter((printer) => technologyFilter.includes(printer.technology))
    .filter((printer) => {
      if (allFilterAreOff) {
        return printer;
      }
      console.log(parseFloat(searchFilterX).toFixed(1));
      return searchFilterX
        ? printer.builVolume_mm.x >= parseFloat(searchFilterX).toFixed(1)
        : true;
    })
    .filter((printer) => {
      if (allFilterAreOff) {
        return printer;
      }
      return searchFilterY
        ? printer.builVolume_mm.y >= parseFloat(searchFilterY).toFixed(1)
        : true;
    })
    .filter((printer) => {
      if (allFilterAreOff) {
        return printer;
      }
      return searchFilterZ
        ? printer.builVolume_mm.z >= parseFloat(searchFilterZ).toFixed(1)
        : true;
    });
  // .filter((printer) =>
  //   brandFilter.length !== 0
  //     ? brandFilter.includes(printer.technology)
  //     : printer
  // );

  const techOptions = [
    { label: "ColorJet Printing", value: "CJP" },
    { label: "Direct Light Processing", value: "DLP" },
    { label: "Direct Metal Printing", value: "DMP" },
    { label: "Extrusion", value: "Extrusion" },
    { label: "MultiJet Printing", value: "MJP" },
    { label: "Selective Laser Sintering", value: "SLS" },
    { label: "Stereolithography", value: "SLA" },
  ];
  // const brandOptions = [
  //   { label: "DMP Factory 350", value: "DMP Factory 350" },
  //   { label: "DMP Factory 500 Solution", value: "DMP Factory 500 Solution" },
  //   { label: "ProJet MJP 2500", value: "ProJet MJP 2500" },
  //   { label: "ProJet MJP 2500 Plus", value: "ProJet MJP 2500 Plus" },
  // ];
  // const industryOptions = [
  //   { label: "ColorJet Printing", value: "CJP" },
  //   { label: "Direct Light Processing", value: "DLP" },
  //   { label: "Direct Metal Printing", value: "DMP" },
  // ];

  function onTechnologyCheckBoxChange(checkboxValue) {
    setTechnologyFilter(checkboxValue);
  }

  const onSearchTextChanged = (dimension, onChangeEvent) => {
    if (dimension == "X") {
      setSearchFilterX(onChangeEvent.target.value);
    } else if (dimension == "Y") {
      setSearchFilterY(onChangeEvent.target.value);
    } else {
      setSearchFilterZ(onChangeEvent.target.value);
    }
  };

  return (
    <>
      <Header />
      <main style={styles.mainContainer}>
        <div className="filters" style={{ minWidth: 250 }}>
          <Collapse
            defaultActiveKey={["1"]}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <Panel header="Tecnologia" key="1">
              <div>
                <Checkbox.Group
                  options={techOptions}
                  style={{ display: "flex", flexDirection: "column" }}
                  onChange={onTechnologyCheckBoxChange}
                />
              </div>
            </Panel>
            <Panel header="Volumen" key="2">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                  prefix="X (mm)"
                  style={{ width: 200 }}
                  onChange={(e) => onSearchTextChanged("X", e)}
                />
                <Input
                  prefix="Y (mm)"
                  style={{ width: 200 }}
                  onChange={(e) => onSearchTextChanged("Y", e)}
                />
                <Input
                  prefix="Z (mm)"
                  style={{ width: 200 }}
                  onChange={(e) => onSearchTextChanged("Z", e)}
                />
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="itemList" style={styles.itemList}>
          {/* {(allFilterAreOff ? data : filteredData).map((printer) => {            
            return(
              <PrinterCard
              name={printer.name}
              description={printer.description}
              software={printer.software}
              price={printer.refPrice}
              />
            )
          })} */}
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={allFilterAreOff ? data : filteredData}
            renderItem={(printer) => (
              <List.Item>
                <PrinterCard
                  name={printer.name}
                  description={printer.description}
                  software={printer.software}
                  price={printer.refPrice}
                />
              </List.Item>
            )}
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
  itemList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
  },
  printerCardContent: {
    border: "1px solid #EEEEEE",
    borderRadius: 8,
    width: 400,
  },
  printerCardImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
  },
  printerCardInfoContent: {
    padding: 25,
  },
  softPriceContainer: {},
};
