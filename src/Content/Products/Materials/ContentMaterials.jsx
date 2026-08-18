import { useState } from "react";
import { useQuery } from "react-query";

import MaterialListingTable from "../../../Components/MaterialScreen/MaterialListingTable";
import MaterialFilterPanel from "../../../Components/MaterialScreen/MaterialFilterPanel/MaterialFilterPanel";

import { getMaterialsFromDB } from "../../../utils/dataHandler";
import {
  printerFiltering,
  technologyFiltering,
  propertyFiltering,
} from "../../../utils/filters";
import SpecialContent from "../../../Components/Special/SpecialContent";
import useBreakpoints from "../../../hooks/useBreakpoints";

export default function ContentMaterials() {
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

  const { isTablet, isDesktop, isWideScreen } = useBreakpoints();

  //Styling
  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      ...(isTablet && {
        gap: "40px",
      }),
      ...(isDesktop && {
        flexDirection: "row",
        alignItems: "start",
      }),
      ...(isWideScreen && {
        flexDirection: "row",
        alignItems: "start",
      }),
    },
    filtersContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    table: {
      flexGrow: 1,
    },
  };

  //Data material fetching
  const materialData = useQuery("materialDataFetching", getMaterialsFromDB, {
    select: (materialData) => {
      return (
        materialData
          //Search filter
          .filter((material) =>
            printerFiltering(material, printerFilterCriteria),
          )
          .filter((material) =>
            technologyFiltering(material, technologyFilterCriteria),
          )
          .filter((material) =>
            propertyFiltering(material, propertyFilterCriteria),
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
    onChangeEvent,
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
    <SpecialContent>
      <div className="materialContentLayout" style={styles.layout}>
        <div className="filters" style={styles.filtersContainer}>
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
        <div className="table" style={styles.table}>
          <MaterialListingTable data={materialData.data} />
        </div>
      </div>
    </SpecialContent>
  );
}
