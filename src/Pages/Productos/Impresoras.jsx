import { useState } from "react";
import { useQuery } from "react-query";

import { Pagination } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PrinterFilterPanel from "../../Components/PrinterScreen/PrinterFilterPanel/PrinterFilterPanel";
import PrinterCard from "../../Components/PrinterScreen/PrinterCard";

import { getPrintersFromDB } from "../../utils/dataHandler";

export default function Impresoras() {
  //State
  const [searchFilterX, setSearchFilterX] = useState("");
  const [searchFilterY, setSearchFilterY] = useState("");
  const [searchFilterZ, setSearchFilterZ] = useState("");
  const [technologyFilter, setTechnologyFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //Screenwidth breakpoints

  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024)

  //Puntos de quiebre para mostrar 3 y 4 impresoras en el grid
  const is1280 = useMediaQuery(1280)
  const is1580 = useMediaQuery(1580)

  //Data fetching
  const { data, isLoading } = useQuery(["printerFetching"], getPrintersFromDB, {
    select: (printerData) => {
      return (
        printerData.printers
          //Search filter
          .filter((printer) => {
            return technologyFilter.length === 0
              ? printer
              : technologyFilter.includes(printer.technology) && printer;
          })
          .filter((printer) => {
            return searchFilterX === ""
              ? printer
              : searchFilterX
              ? printer.builVolume.x <= parseFloat(searchFilterX).toFixed(1)
              : false;
          })
          .filter((printer) => {
            return searchFilterY === ""
              ? printer
              : searchFilterY
              ? printer.builVolume.y <= parseFloat(searchFilterY).toFixed(1)
              : false;
          })
          .filter((printer) => {
            return searchFilterZ === ""
              ? printer
              : searchFilterZ
              ? printer.builVolume.z <= parseFloat(searchFilterZ).toFixed(1)
              : false;
          })
          .map((printer) => {
            printer.imageUrl = "https://picsum.photos/id/" + (Math.floor(Math.random() * (100 - 1 + 1)) + 1) + "/300"
            return printer;
          })
      );
    },
  });

  //Pagination
  const itemsPerPage = 8;
  // const totalPages = Math.ceil(data.length / itemsPerPage);

  //Styling
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: isColumnLayoutWidth ? "column" : "row",
      gap: is1280 ? "20px" : "200px",
      padding: is1280 ? "15px" : "50px 50px",
      minHeight: isColumnLayoutWidth ? "auto" : "890px",
      alignItems: isColumnLayoutWidth ? "stretch" : "flex-start",
    },
    itemListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
    },
    itemListColumn: {
      display: "flex",
      flexDirection: "column",
      flexWrap: isColumnLayoutWidth ? "nowrap" : "wrap",
      padding: "0 15px",
      gap: 20,
    },
    itemListGrid: {
      display: "grid",
      gridTemplateColumns:  isColumnLayoutWidth ? "1fr 1fr" : is1280 ? "1fr 1fr" : is1580 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
      gridGap: "10px",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "flex-start",
    },
  };

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const itemsForCurrentPage = data.slice(startIndex, endIndex);

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
        <div className="itemListContainer" style={styles.itemListContainer}>
          <div
            className="itemList"
            style={isColumnLayoutWidth ? styles.itemListColumn : styles.itemListGrid}
          >
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              data.slice(startIndex, endIndex).map((printer) => {
                return (
                  <PrinterCard
                    key={printer.name}
                    printerImageUrl={printer.imageUrl}
                    name={printer.name}
                    description={printer.description}
                    builVolume={printer.builVolume}
                    technology={printer.technology}
                  />
                );
              })
            )}
          </div>
          <div
            className="paginationContainer"
            style={styles.paginationContainer}
          >
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={isLoading ? 1 : data.length}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
