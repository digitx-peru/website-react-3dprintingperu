import PageContent from "../../../Components/PageContent";
import CustomContentMachineSupport from "../../../Content/Services/Maintenance/CustomContentMachineSupport";

export default function CustomMachineSupport() {
  return (
    <>
      <PageContent
        heroTitle={"Soporte y mantenimiento de impresoras 3D"}
        heroMessage={"Cuida tu inversión en manufactura aditiva"}
        backgroundImage={"/images/hero/hero_machine_service.webp"}
        contactFormDefaultOption={"supportOption"}
      >
        <CustomContentMachineSupport />
      </PageContent>
    </>
  );
}
