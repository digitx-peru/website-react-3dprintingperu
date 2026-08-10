import PageContent from "../../../Components/PageContent";
import CustomContentFoundryMoulds from "../../../Content/Applications/Foundry/CustomContentFoundryMoulds";

export default function CustomFoundryMoulds() {
  return (
    <>
      <PageContent
        heroTitle={"Reduce costos y tiempos de entrega"}
        heroMessage={"Incrementa tu capacidad de producir piezas mas complejas"}
        backgroundImage={"/images/hero/hero_foundry_moulds.jpg"}
      >
        <CustomContentFoundryMoulds />
      </PageContent>
    </>
  );
}
