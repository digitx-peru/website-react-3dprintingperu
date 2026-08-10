import PageContent from "../../../Components/PageContent";
import CustomContentFurniture from "../../../Content/Applications/Consumer/CustomContentFurniture";

export default function CustomFurniture() {
  return (
    <>
      <PageContent
        heroTitle={"La nueva generación de muebles"}
        heroMessage={
          "La manufactura aditiva ha llevado el diseño de muebles a otra dimensión"
        }
        backgroundImage={"/images/hero/hero_furniture.jpg"}
      >
        <CustomContentFurniture />
      </PageContent>
    </>
  );
}
