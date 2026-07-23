import PageContent from "../../Components/PageContent";

import CustomContentNewsOneSpanish from "../../Content/News/CustomContentNewsOneSpanish";
import CustomContentNewsOneOriginal from "../../Content/News/CustomContentNewsOneOriginal";

import { Tabs } from "antd";

export default function CustomNewsOne() {
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
    <>
      <PageContent
        heroTitle={
          "El Hospital de la Universidad de Salzburgo realiza una cirugía innovadora usando avanzada tecnologia ortopedica"
        }
      >
        <Tabs defaultActiveKey="1" items={tabItems} />
      </PageContent>
    </>
  );
}
