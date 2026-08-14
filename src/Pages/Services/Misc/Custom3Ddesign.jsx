// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";

import CustomContent3Ddesign from "../../../Content/Services/Misc/CustomContent3Ddesign";

export default function Custom3Ddesign() {
  return (
    <>
      <PageContent
        heroTitle={"El primer paso para la fabricación digital"}
        heroMessage={""}
        backgroundImage={
          "/images/hero/hero_3ddesign.png"
        }
        contactFormDefaultOption={"softwareOption"}
      >
        <CustomContent3Ddesign />
      </PageContent>
    </>
  );
}
