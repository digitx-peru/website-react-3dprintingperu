// import useMediaQuery from "../../hooks/useMediaQuery";

import PageContent from "../../../../Components/PageContent";

import CustomContent3Ddesign from "../../../../Components/Content/services/CustomContent3Ddesign";

export default function Custom3Ddesign() {
  // const routerParams = useParams();

  // const isDevice = useMediaQuery(768);
  // const is1440 = useMediaQuery(1440);

  return (
    <>
      <PageContent
        heroTitle={"El primer paso para la fabricación digital"}
        heroMessage={""}
        heroImage={'hero/background_artisan.jpeg'}
      >
        <CustomContent3Ddesign />
      </PageContent>
    </>
  );
}
