import { Table } from "antd";

import useMediaQuery from "../../hooks/useMediaQuery";

import ExpansionTable from "./ExpansionTable";
import ExpansionTableDevice from "./ExpansionTableDevice";
import { mainColumns } from "./materialListingTableHeaders";

export default function MaterialListingTable({ data }) {
  const isDevice = useMediaQuery(768);

  return (
    <Table
      columns={mainColumns}
      dataSource={data}
      size="small"  
      expandable={{
        expandedRowRender: (record) => isDevice ? <ExpansionTableDevice record={record} /> : <ExpansionTable record={record} />,
        expandRowByClick: isDevice ? true : false,
      }}
    />
  );
}
