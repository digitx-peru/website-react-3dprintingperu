import { Tabs } from "antd";

import useBreakpoints from "../../hooks/useBreakpoints";

import CustomContentNewsOneOriginal from "./CustomContentNewsOneOriginal";
import CustomContentNewsOneSpanish from "./CustomContentNewsOneSpanish";
import SpecialContent from "../../Components/Special/SpecialContent";

export default function CustomContentNewsOne({}) {
  const tabItems = [
    {
      key: "1",
      label: "Español",
      children: <CustomContentNewsOneSpanish />,
    },
    {
      key: "2",
      label: "Nota Original",
      children: <CustomContentNewsOneOriginal />,
    },
  ];

  return (
    <SpecialContent>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </SpecialContent>
  );
}
