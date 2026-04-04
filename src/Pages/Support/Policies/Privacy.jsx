import useMediaQuery from "../../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";
import CustomContentNewsTwo from "../../../Components/Content/politics/privacy";

export default function Privacy() {
  const isDevice = useMediaQuery(768);

  return (
    <>
      <PageContent heroTitle={"Política de privacidad"} heroMessage={""} floatButton={false}>
        <CustomContentNewsTwo />
      </PageContent>
    </>
  );
}
