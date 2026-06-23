import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ServicesDropdown() {
  return (
    <NavDropDownContainer>
      <NavDropDown title={"Impresion 3D"}>
        <NavOptionListItem linkpath={"/servicios/fotopolimeros"}>
          Fotopolímeros avanzados
        </NavOptionListItem>
        <NavOptionListItem linkpath={"/servicios/patrones-de-joyeria"}>
          Patrones para joyería
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Producción"}>
        <NavOptionListItem linkpath={"/servicios/silicona-y-poliuretano"}>
          Silicona y poliuretano
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Otros"}>
        <NavOptionListItem linkpath={"/servicios/diseño-3d"}>
          Diseño 3D
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Mantenimiento"}>
        <NavOptionListItem linkpath={"/servicios/mantenimiento"}>
          Impresoras 3D
        </NavOptionListItem>
      </NavDropDown>
    </NavDropDownContainer>
  );
}
