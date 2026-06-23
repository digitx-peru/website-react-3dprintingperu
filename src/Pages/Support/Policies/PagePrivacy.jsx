import useMediaQuery from "../../../hooks/useMediaQuery";

import PageContent from "../../../Components/PageContent";
import CustomContentNewsTwo from "../../../Content/Policies/ContentPrivacy";

export default function PagePrivacy() {
  const isDevice = useMediaQuery(768);

  return (
    <>
      <PageContent heroTitle={"Política de privacidad"} heroMessage={""} floatButton={false}>
        <CustomContentNewsTwo />
      </PageContent>
    </>
  );
}
