// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";
import CustomContentJewelryPatterns from "../../../Content/Services/3DPrint/CustomContentJewelryPatterns";

export default function CustomJewelryPatterns() {
  return (
    <>
      <PageContent
        heroTitle={"Patrones de joyería para vaciado y moldes"}
        heroMessage={""}
        backgroundImage={"/images/hero/hero_jewelry_casting.jpg"}
        contactFormDefaultOption={"printOption"}
      >
        <CustomContentJewelryPatterns />
      </PageContent>
    </>
  );
}
