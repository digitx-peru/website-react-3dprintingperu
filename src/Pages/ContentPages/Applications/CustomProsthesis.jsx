// import { useParams } from "react-router-dom";

// import useMediaQuery from "../../hooks/useMediaQuery";
import PageContent from "../../../Components/PageContent";

import CustomContentProsthesis from "../../../Components/Content/applications/health/CustomContentProsthesis";

export default function CustomProsthesis() {
  // const routerParams = useParams();

  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  return (
    <>
      <PageContent
        heroTitle={"Cada paciente un caso diferente"}
        heroMessage={
          "La Impresion 3D es la forma de atender las necesidades especificas de cada uno"
        }
        heroImage={"/hero/hero_med.jpg"}
      >
        <CustomContentProsthesis />
      </PageContent>
    </>
  );
}
