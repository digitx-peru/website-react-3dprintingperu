import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ApplicationsDropdown() {
  return (
    <NavDropDownContainer>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Fundición"}>
        <NavOptionListItem
          linkTitle={"Vaciado"}
          linkpath={"/aplicaciones/fundicion/vaciado"}
        />
        <NavOptionListItem
          linkTitle={"Moldes"}
          linkpath={"/aplicaciones/fundicion/moldes"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Joyería"}>
        <NavOptionListItem
          linkTitle={"Vaciado"}
          linkpath={"/aplicaciones/joyeria/vaciado"}
        />
        <NavOptionListItem
          linkTitle={"Moldes"}
          linkpath={"/aplicaciones/joyeria/moldes"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Salud"}>
        <NavOptionListItem
          linkTitle={"Prótesis"}
          linkpath={"/aplicaciones/salud/protesis"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Consumidor final"}>
        <NavOptionListItem
          linkTitle={"Muebles"}
          linkpath={"/aplicaciones/consumidor-final/muebles"}
        />
        <NavOptionListItem
          linkTitle={"Carcasas y cubiertas"}
          linkpath={"/aplicaciones/consumidor-final/carcasas-cubiertas"}
        />
        <NavOptionListItem
          linkTitle={"Sellos y juntas"}
          linkpath={"/aplicaciones/consumidor-final/sellos-juntas"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
    </NavDropDownContainer>
  );
}
