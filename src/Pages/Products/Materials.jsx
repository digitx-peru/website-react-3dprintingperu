import PageContent from "../../Components/PageContent";

import ContentMaterials from "../../Content/Products/Materials/ContentMaterials";

export default function Materials() {
  return (
    <PageContent
      heroTitle={"Materiales"}
      backgroundImage={"/images/hero/hero_materials.png"}
    >
      <ContentMaterials />
    </PageContent>
  );
}
