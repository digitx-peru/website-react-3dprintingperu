import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import { Pagination } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PrinterFilterPanel from "../../Components/PrinterScreen/PrinterFilterPanel/PrinterFilterPanel";
import PrinterCard from "../../Components/PrinterScreen/PrinterCard";

import { getPrintersFromDB } from "../../utils/dataHandler";
import {
  volumeFiltering,
  applicationFiltering,
  technologyFiltering,
  technologyLabelValueSwap,
} from "../../utils/filters";

export default function Printers() {
  //Read information coming from other pages
  const location = useLocation();

  const heroContent = {
    title: "Impresoras",
    heroImage: "/images/heroImasro_img_printings.png",
  };

  //State
  const [applicationFilterCriteria, setApplicationFilterCriteria] = useState(
    [],
  );
  const [technologyFilterCriteria, setTechnologyFilterCriteria] = useState([]);
  const [volumeFilterCriteria, setVolumeFilterCriteria] = useState({
    x: "",
    y: "",
    z: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  //Screenwidth breakpoints
  //Esto marca el punto en el que pasa de tener un layout columna a fila
  // const isColumnLayoutWidth = useMediaQuery(1024);

  //Puntos de quiebre para mostrar 3 y 4 impresoras en el grid
  const is480 = useMediaQuery(480);
  const is768 = useMediaQuery(768);
  const is1080 = useMediaQuery(1080);
  const is1280 = useMediaQuery(1280);
  const is1440 = useMediaQuery(1440);
  const is1580 = useMediaQuery(1580);

  //Printer imagelist

  function getPrinterImageUsingName(printerName) {
    switch (printerName) {
      case "Projet CJP 660 Pro":
        return "/images/products/3dprint/printers/printer_image_cjp_660Pro.png";
      case "DMP Flex 100":
        return "/images/products/3dprint/printers/printer_image_dmp_flex_100.png";
      case "DMP Flex 200":
        return "/images/products/3dprint/printers/printer_image_dmp_flex_200.png";
      case "DMP Flex 350":
        return "/images/products/3dprint/printers/printer_image_dmp_flex_350.png";
      case "DMP Factory 500":
        return "/images/products/3dprint/printers/printer_image_dmp_factory_500.png";
      case "EXT 220 MED":
        return "/images/products/3dprint/printers/printer_image_ext_220_MED.png";
      case "EXT 800 Titan Pellet":
        return "/images/products/3dprint/printers/printer_image_ext_800_titan_pellet.jpg";
      case "EXT 1070 Titan Pellet":
        return "/images/products/3dprint/printers/printer_image_ext_1070_titan_pellet.jpg";
      case "EXT 1270 Titan Pellet":
        return "/images/products/3dprint/printers/printer_image_ext_1270_titan.png";
      case "Figure 4 Jewelry":
        return "/images/products/3dprint/printers/printer_image_figure_4_jewelry.jpg";
      case "Figure 4 Modular":
        return "/images/products/3dprint/printers/printer_image_figure_4_modular.jpg";
      case "Figure 4 Produccion":
        return "/images/products/3dprint/printers/printer_image_figure_4_production.jpg";
      case "Figure 4 Standalone":
        return "/images/products/3dprint/printers/printer_image_figure_4_standalone.jpg";
      case "Funmat HT":
        return "/images/products/3dprint/printers/printer_image_HT.png";
      case "Funmat Pro 310 Neo":
        return "/images/products/3dprint/printers/printer_image_funmatpro_ext_310.png";
      case "Funmat Pro 310 Apollo":
        return "/images/products/3dprint/printers/printer_image_310_apollo.png";
      case "Funmat Pro 410":
        return "/images/products/3dprint/printers/printer_image_funmatpro_ext_410.jpg";
      case "Funmat Pro 610LT":
        return "/images/products/3dprint/printers/printer_image_funmatpro_ext_610.png";
      case "Funmat Pro 610HT":
        return "/images/products/3dprint/printers/printer_image_funmatpro_ext_610.png";
      case "MJP 300W Plus":
        return "/images/products/3dprint/printers/printer_image_mjp_300Wplus.png";
      case "Projet MJP 2500 Plus":
        return "/images/products/3dprint/printers/printer_image_mjp_2500.jpg";
      case "Projet MJP 2500IC":
        return "/images/products/3dprint/printers/printer_image_mjp_2500IC.png";
      case "Projet MJP 2500W Plus":
        return "/images/products/3dprint/printers/printer_image_mjp_2500W_plus.jpg";
      case "Projet MJP 6000":
        return "/images/products/3dprint/printers/printer_image_mjp_6000.png";
      case "Projet MJP 7000":
        return "/images/products/3dprint/printers/printer_image_mjp_7000.png";
      case "SLA 750":
        return "/images/products/3dprint/printers/printer_image_sla_750.png";
      case "SLA 825 Dual":
        return "/images/products/3dprint/printers/printer_image_sla_825_dual.png";
      case "SLS 300":
        return "/images/products/3dprint/printers/printer_image_sls_300.png";
      case "SLS 380":
        return "/images/products/3dprint/printers/printer_image_sls_380.png";

      default:
        return "/images/products/3dprint/printers/printer_image_not_available.jpg";
    }
  }

  // Initialize from state (only on first render)
  useEffect(() => {
    if (location.state?.preselectedApplications) {
      setApplicationFilterCriteria(
        location.state.preselectedApplications || [],
      );
    }
  }, [location.state]);

  //Data fetching
  const { data, isLoading } = useQuery(["printerFetching"], getPrintersFromDB, {
    select: (printerData) => {
      return (
        printerData
          //Search filter
          .filter((printer) =>
            applicationFiltering(printer, applicationFilterCriteria),
          )
          .filter((printer) =>
            technologyFiltering(printer, technologyFilterCriteria),
          )
          .filter((printer) => volumeFiltering(printer, volumeFilterCriteria))
          //Temporary
          .map((printer) => {
            printer.imageUrl = getPrinterImageUsingName(printer.name);
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
      flexDirection: "column",
      //gap: is1080 ? "20px" : "150px",
      //padding: "50px 50px",
      minHeight: is1080 ? "auto" : "890px",
      alignItems: is1080 ? "stretch" : "flex-start",
      // position:"absolute",
      // zIndex:2,
      width: "100vw",
    },
    itemListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      marginTop: "50px",
    },
    itemListColumn: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "0 15px",
      justifyContent: "center",
      gap: 20,
    },
    itemListGrid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "0 15px",
      gap: 20,
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "flex-start",
    },
  };

  //Event Handlers
  function applicationCheckBoxChangeHandler(checkboxValue) {
    setApplicationFilterCriteria(checkboxValue);
  }

  function technologyCheckBoxChangeHandler(checkboxValue) {
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
      <Header
        heroTitle={heroContent.title}
        heroMessage={heroContent.message}
        heroImage={heroContent.heroImage}
      />
      <main style={styles.mainContainer}>
        <div
          style={{ display: "flex", flexDirection: is1080 ? "column" : "row" }}
        >
          <div
            className="filters"
            style={{
              padding: "50px 50px",
              marginRight: is1080 ? "20px" : "150px",
              color: "rgb(10,79,79)",
            }}
          >
            <PrinterFilterPanel
              preselectedApplications={applicationFilterCriteria}
              applicationCheckBoxChangeHandler={
                applicationCheckBoxChangeHandler
              }
              technologyCheckBoxChangeHandler={technologyCheckBoxChangeHandler}
              dimensionChangeHandler={dimensionChangeHandler}
            />
          </div>
          <div className="itemListContainer" style={styles.itemListContainer}>
            <div
              className="itemList"
              style={is1080 ? styles.itemListColumn : styles.itemListGrid}
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
        </div>

        <Footer />
      </main>
    </>
  );
}
