import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ServicesDropdown() {
  return (
    <NavDropDownContainer>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Impresion 3D"}>
        <NavOptionListItem
          linkTitle={"Fotopolímeros avanzados"}
          linkpath={"/servicios/impresion-3D/fotopolimeros"}
        />
        <NavOptionListItem
          linkTitle={"Patrones para joyería"}
          linkpath={"/servicios/impresion-3D/patrones-de-joyeria"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Producción"}>
        <NavOptionListItem
          linkTitle={"Silicona y poliuretano"}
          linkpath={"/servicios/produccion/silicona-y-poliuretano"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Otros"}>
        <NavOptionListItem
          linkTitle={"Diseño 3D"}
          linkpath={"/servicios/otros/diseño-3d"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Mantenimiento"}>
        <NavOptionListItem
          linkTitle={"Impresoras 3D"}
          linkpath={"/servicios/mantenimiento/soporte-tecnico"}
        />
      </NavDropDown>
    </NavDropDownContainer>
  );
}
