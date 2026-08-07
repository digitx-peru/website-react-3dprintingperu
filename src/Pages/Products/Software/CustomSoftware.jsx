import PageContent from "../../../Components/PageContent";
import CustomContentSoftware from "../../../Content/Products/Software/CustomContentSoftware";

export default function CustomSoftware() {
  return (
    <>
      <PageContent
        heroTitle={"RhinoArtisan"}
        heroMessage={
          "Herramientas avanzadas para diseño de joyeria en 3D, por los creadores de RhinoGold"
        }
        backgroundImage={
          "/images/hero/hero_software_artisan.jpeg"
        }
        contactFormDefaultOption={"softwareOption"}
      >
        <CustomContentSoftware />
      </PageContent>
    </>
  );
}
