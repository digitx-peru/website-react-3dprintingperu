import { useState } from "react";
import { useQuery } from "react-query";

import { Pagination } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PrinterFilterPanel from "../../Components/PrinterScreen/PrinterFilterPanel/PrinterFilterPanel";
import PrinterCard from "../../Components/PrinterScreen/PrinterCard";

import { getPrintersFromDB } from "../../utils/dataHandler";
import { volumeFiltering, technologyFiltering, technologyLabelValueSwap } from "../../utils/filters";

import titanPellet1070 from "../../assets/printerImages/printer_image_1070_titan_pellet.jpg";
import titan1270 from "../../assets/printerImages/printer_image_1270_titan.jpg";
import figure4Jewelry from "../../assets/printerImages/printer_image_figure_4_jewelry.jpg";
import figure4Modular from "../../assets/printerImages/printer_image_figure_4_modular.jpg";
import figure4Production from "../../assets/printerImages/printer_image_figure_4_production.jpg";
import figure4Standalon from "../../assets/printerImages/printer_image_figure_4_standalone.jpg";
import projetMjp2500 from "../../assets/printerImages/printer_image_projet_mjp_2500.jpg";
import projetMjp2500W from "../../assets/printerImages/printer_image_projet_mjp_2500W_plus.jpg";

export default function Impresoras() {
  //State
  const [technologyFilterCriteria, setTechnologyFilterCriteria] = useState([]);
  const [volumeFilterCriteria, setVolumeFilterCriteria] = useState({
    x: "",
    y: "",
    z: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  //Screenwidth breakpoints
  //Esto marca el punto en el que pasa de tener un layout columna a fila
  const isColumnLayoutWidth = useMediaQuery(1024);

  //Puntos de quiebre para mostrar 3 y 4 impresoras en el grid
  const is1280 = useMediaQuery(1280);
  const is1580 = useMediaQuery(1580);

  //Printer imagelist
  function getPrinterImageUsingName(printerName) {
    switch (printerName) {
      case "Figure 4 Joyeria":
        return figure4Jewelry;
      case "Projet MJP 2500W Plus":
        return projetMjp2500W;
      // case "Projet CJP 660 Pro":
      //   return 
      // case "DMP Flex 200":
      //   return
      case "Figure 4 Modular":
        return figure4Modular;
      case "Figure 4 Standalone":
        return figure4Standalon;
      // case "Projet MJP 2500 Plus":
      //   return
      // case "SLA 750":
      //   return
      case "EXT 1070 Titan Pellet":
        return titanPellet1070;
      // case "SLS 300":
      //   return
      default:
        return "https://picsum.photos/300"
    }
    
  }


  //Data fetching
  const { data, isLoading } = useQuery(["printerFetching"], getPrintersFromDB, {
    select: (printerData) => {
      return (
        printerData.printers
          //Search filter
          .filter((printer) =>
            technologyFiltering(printer, technologyFilterCriteria)
          )
          .filter((printer) => volumeFiltering(printer, volumeFilterCriteria))
          //Temporary
          .map((printer) => {
            printer.imageUrl = getPrinterImageUsingName(printer.name)
            return printer;
          })
      );
    },
  });

  //Pagination
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
      gridTemplateColumns: isColumnLayoutWidth
        ? "1fr 1fr"
        : is1280
        ? "1fr 1fr"
        : is1580
        ? "1fr 1fr 1fr"
        : "1fr 1fr 1fr 1fr",
      gridGap: "10px",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "flex-start",
    },
  };

  //Event Handlers
  function technologyCheckBoxChangeHandler(checkboxValue) {
    console.log(technologyFilterCriteria);
    const technologyValue = technologyLabelValueSwap(checkboxValue);
    setTechnologyFilterCriteria(technologyValue);
  }

  const dimensionChangeHandler = (dimension, onChangeEvent) => {
    setVolumeFilterCriteria({
      ...volumeFilterCriteria,
      [dimension]: onChangeEvent.target.value,
    });
  };

  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <main style={styles.mainContainer}>
        <div className="filters">
          <PrinterFilterPanel
            technologyCheckBoxChangeHandler={technologyCheckBoxChangeHandler}
            dimensionChangeHandler={dimensionChangeHandler}
          />
        </div>
        <div className="itemListContainer" style={styles.itemListContainer}>
          <div
            className="itemList"
            style={
              isColumnLayoutWidth ? styles.itemListColumn : styles.itemListGrid
            }
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
                    technology={printer.technology.value}
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
              onChange={pageChangeHandler}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
