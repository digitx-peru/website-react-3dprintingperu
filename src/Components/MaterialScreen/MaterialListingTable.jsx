import { Table } from "antd";

import ExpansionTable from "./ExpansionTable";
import { mainColumns } from "./materialListingTableHeaders";

export default function MaterialListingTable({ data }) {
  return (
    <Table
      columns={mainColumns}
      dataSource={data}
      expandable={{
        expandedRowRender: (record) => <ExpansionTable record={record} />,
      }}
    />
  );
}
