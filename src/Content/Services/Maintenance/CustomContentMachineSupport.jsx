import TextImageRow from "../../../Components/Content/TextImageRow";

export default function CustomContentMachineSupport() {
  return (
    <>
      <TextImageRow
        sectionName={"rowOne"}
        imageRight={true}
        imageName={
          "services/Maintenance/MachineSupport/machine_support_3dprinter.png"
        }
      >
        <h2>Especialistas en mantenimiento</h2>
        <p>
          Nos especializamos en el mantenimiento y soporte para el uso de
          impresoras 3D de las marcas que representamos, 3D Systems e Intamsys.
          Contamos con técnicos certificados directamente por estos fabricantes,
          lo que nos permite garantizar un servicio técnico experto y
          respaldado.
        </p>
        <p>
          Además, gracias a nuestra amplia experiencia en la tecnología de
          impresión 3D, también podemos evaluar, diagnosticar y dar soporte a
          equipos de otros fabricantes.
        </p>
      </TextImageRow>
      {/* //////////////////////////////////////////////////////////////////////////////////// */}
    </>
  );
}
