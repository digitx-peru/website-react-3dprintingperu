// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";
import CustomContentPhotopolymers from "../../../Content/Services/3DPrint/CustomContentPhotopolymers";

export default function CustomPhotopolymers() {
  return (
    <>
      <PageContent
        heroTitle={"Producción de partes de resina con impresión 3D"}
        heroMessage={"Resinas de nivel industrial para usos especiales"}
        backgroundImage={"/images/services/3dprint/photopolymers/hero_img_photopolymer.png"}
      >
        <CustomContentPhotopolymers />
      </PageContent>
    </>
  );
}
