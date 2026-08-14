import PageContent from "../../../Components/PageContent";
import CustomContentProsthesis from "../../../Content/Applications/Health/CustomContentProsthesis";

export default function CustomProsthesis() {
  return (
    <>
      <PageContent
        heroTitle={"Cada paciente un caso diferente"}
        heroMessage={
          "La Impresión 3D es la forma de atender las necesidades especificas de cada uno"
        }
        backgroundImage={"/images/hero/hero_health.jpg"}
      >
        <CustomContentProsthesis />
      </PageContent>
    </>
  );
}
