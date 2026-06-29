import PageContent from "../../../Components/PageContent";
import CustomContentSeals from "../../../Content/Applications/Consumer/CustomContentSeals";

export default function CustomSeals() {
  return (
    <>
      <PageContent
        heroTitle={"Sellos y juntas"}
        heroMessage={
          "Acelera la iteración de diseño y la validación de uso final de prototipos con silicona 100% o elastómeros biocompatibles"
        }
      >
        <CustomContentSeals />
      </PageContent>
    </>
  );
}
