// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../../Components/PageContent";
import CustomContentPhotopolymers from "../../../../Components/Content/services/CustomContentPhotopolymers";

export default function CustomPhotopolymers() {
  // const routerParams = useParams();

  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  return (
    <>
      <PageContent
        heroTitle={"Producción de partes de resina con impresión 3D"}
        heroMessage={"Resinas de nivel industrial para usos especiales"}
        heroImage={"hero/background_artisan.jpeg"}
      >
        <CustomContentPhotopolymers />
      </PageContent>
    </>
  );
}
