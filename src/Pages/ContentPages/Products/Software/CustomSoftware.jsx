import PageContent from "../../../../Components/PageContent";
import CustomContentSoftware from "../../../../Components/Content/products/software/CustomContentSoftware";

export default function CustomSoftware() {
  return (
    <>
      <PageContent
        heroTitle={"RhinoArtisan"}
        heroMessage={
          "Herramientas avanzadas para diseño de joyeria en 3D, por los creadores de RhinoGold"
        }
        heroImage={"hero/background_artisan.jpeg"}
      >
        <CustomContentSoftware />
      </PageContent>
    </>
  );
}
