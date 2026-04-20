import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ProductsDropdown() {
  return (
    <NavDropDownContainer>
      <NavDropDown title={"Impresion 3D"}>
        <NavOptionListItem linkpath={"/productos/impresoras"}>
          Impresoras
        </NavOptionListItem>
        <NavOptionListItem linkpath={"/productos/materiales"}>
          Materiales
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Software"}>
        <NavOptionListItem linkpath={"/productos/software/rhino-artisan"}>
          RhynoArtisan
        </NavOptionListItem>
      </NavDropDown>
    </NavDropDownContainer>
  );
}
