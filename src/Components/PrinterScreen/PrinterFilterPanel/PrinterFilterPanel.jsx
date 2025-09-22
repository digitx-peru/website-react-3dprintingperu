import { useQuery } from "react-query";

import { Checkbox, Collapse } from "antd";

import VolumeFilterInputGroup from "./VolumeFilter/VolumeFilterInputGroup";

import { techOptions } from "./printerFilterOptions";

import { getTechnologiesNamesListFromAPI } from "../../../utils/dataHandler";
import { getApplicationsNamesListFromAPI } from "../../../utils/dataHandler";

export default function PrinterFilterPanel({
  preselectedApplications,
  applicationCheckBoxChangeHandler,
  technologyCheckBoxChangeHandler,
  dimensionChangeHandler,
}) {
  //Data fetching //////////////////////////////////////////////////////////////////////////////////////////

  const techNameListData = useQuery(
    ["techNamesListFetching"],
    getTechnologiesNamesListFromAPI
  );

  const applicationNameListData = useQuery(
    ["applicationNamesListFetching"],
    getApplicationsNamesListFromAPI
  );


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      gap: 10,
    },
  };

  // console.log(techNameListData.data);

  return (
    <Collapse defaultActiveKey={["1"]} style={styles.container}>
      <Collapse.Panel header="Aplicaciones" key="1">
        <div>
          <Checkbox.Group
            options={
              applicationNameListData.isLoading 
                ? techOptions
                : applicationNameListData.data.sort()
            }
            value={preselectedApplications} //This value is added to enable preselectedApplications. Coming from applications pages
            style={{ display: "flex", flexDirection: "column" }}
            onChange={applicationCheckBoxChangeHandler}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Tecnología" key="2">
        <div>
          <Checkbox.Group
            options={
              techNameListData.isLoading 
                ? techOptions
                : techNameListData.data.map((tech) => {
                    return tech.label;
                  }).sort()
            }
            style={{ display: "flex", flexDirection: "column" }}
            onChange={technologyCheckBoxChangeHandler}
          />
        </div>
      </Collapse.Panel>
      <Collapse.Panel header="Volumen" key="3">
        <VolumeFilterInputGroup
          dimensionChangeHandler={dimensionChangeHandler}
        />
      </Collapse.Panel>
    </Collapse>
  );
}
