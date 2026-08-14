import { Table } from "antd";

import useBreakpoints from "../../hooks/useBreakpoints";

import ExpansionTable from "./ExpansionTable/ExpansionTable";
import ExpansionTableDevice from "./ExpansionTable/ExpansionTableDevice/ExpansionTableDevice";
import { mainColumns } from "./materialListingTableHeaders";

export default function MaterialListingTable({ data }) {
  const { isTablet, isDesktop } = useBreakpoints();

  return (
    <Table
      columns={mainColumns}
      dataSource={data}
      size="small"
      expandable={{
        expandedRowRender: (record) =>
          isDesktop ? (
            <ExpansionTable record={record} />
          ) : (
            <ExpansionTableDevice record={record} />
          ),
        expandRowByClick: isDesktop ? false : true,
      }}
    />
  );
}
