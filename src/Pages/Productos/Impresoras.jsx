import { useState } from "react";

import { List } from "antd";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import PrinterFilterPanel from "../../Components/PrinterScreen/PrinterFilterPanel/PrinterFilterPanel";
import PrinterCard from "../../Components/PrinterScreen/PrinterCard";

import { getPrintersFromDB } from "../../utils/dataHandler";

export default function Impresoras() {
  //State
  const [searchFilterX, setSearchFilterX] = useState("");
  const [searchFilterY, setSearchFilterY] = useState("");
  const [searchFilterZ, setSearchFilterZ] = useState("");
  const [technologyFilter, setTechnologyFilter] = useState([]);

  //Data Handling
  //Check if all filters are off (false). Returns true if all false, and false if any of the categories is active.
  const allFilterAreOff =
    technologyFilter.length === 0 &&
    searchFilterX === "" &&
    searchFilterY === "" &&
    searchFilterZ === "";

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

  //Event Handlers
  function onTechnologyCheckBoxChange(checkboxValue) {
    setTechnologyFilter(checkboxValue);
  }

  const onSearchTextChanged = (dimension, onChangeEvent) => {
    if (dimension === "X") {
      setSearchFilterX(onChangeEvent.target.value);
    } else if (dimension === "Y") {
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
          <PrinterFilterPanel
            technologyCheckBoxChange={onTechnologyCheckBoxChange}
            searchTextChanged={onSearchTextChanged}
          />
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
  softPriceContainer: {},
};
