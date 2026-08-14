import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ProductsDropdown() {
  return (
    <NavDropDownContainer>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Impresion 3D"}>
        <NavOptionListItem
          linkTitle={"Impresoras"}
          linkpath={"/productos/impresoras"}
        />
        <NavOptionListItem
          linkTitle={"Materiales"}
          linkpath={"/productos/materiales"}
        />
      </NavDropDown>
      {/* /////////////////////////////////////////////////////////// */}
      <NavDropDown title={"Software"}>
        <NavOptionListItem
          linkTitle={"RhynoArtisan"}
          linkpath={"/productos/software/rhino-artisan"}
        />
      </NavDropDown>
    </NavDropDownContainer>
  );
}
