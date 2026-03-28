import { useParams } from "react-router-dom";

import useMediaQuery from "../../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";
import CustomContentPolyurethane from "../../../Components/Content/services/CustomContentPolyurethane"

export default function CustomPolyurethane() {
  const routerParams = useParams();

  const isDevice = useMediaQuery(768);
  const is1440 = useMediaQuery(1440);

  return (
    <>
      <PageContent
        heroTitle={"Producción de piezas basados en poliuretano"}
        heroMessage={"Plásticos de uso final para la industria"}
        heroImage={'hero/hero_med.jpg'}
      >
        <CustomContentPolyurethane />
      </PageContent>
    </>
  );
}
