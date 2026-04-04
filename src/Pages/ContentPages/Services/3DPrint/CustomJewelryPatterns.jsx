// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../../Components/PageContent";
import CustomContentJewelryPatterns from "../../../../Components/Content/services/CustomContentJewelryPatterns";

export default function CustomJewelryPatterns() {
  // const routerParams = useParams();

  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  return (
    <>
      <PageContent
        heroTitle={"Patrones de joyeria para vaciado y moldes"}
        heroMessage={""}
        heroImage={'hero/background_artisan.jpeg'}
      >
        <CustomContentJewelryPatterns />
      </PageContent>
    </>
  );
}
