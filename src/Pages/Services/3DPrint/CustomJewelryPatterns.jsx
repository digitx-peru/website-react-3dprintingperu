// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";
import CustomContentJewelryPatterns from "../../../Content/Services/3DPrint/CustomContentJewelryPatterns";

export default function CustomJewelryPatterns() {
  return (
    <>
      <PageContent
        heroTitle={"Patrones de joyeria para vaciado y moldes"}
        heroMessage={""}
        heroImage={""}
        contactFormDefaultOption={"printOption"}
      >
        <CustomContentJewelryPatterns />
      </PageContent>
    </>
  );
}
