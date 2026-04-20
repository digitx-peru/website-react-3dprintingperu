import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ApplicationsDropdown() {
  return (
    <NavDropDownContainer>
      <NavDropDown title={"Fundición"}>
        <NavOptionListItem linkpath={"/industrias/fundicion"}>
          Moldes de arena
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Joyeria"}>
        <NavOptionListItem linkpath={"/industrias/joyeria"}>
          Moldes de caucho o silicona
        </NavOptionListItem>
        <NavOptionListItem linkpath={"/industrias/joyeria"}>
          Vaciado
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Salud"}>
        <NavOptionListItem linkpath={"/salud/protesis"}>
          Ortesis y Prótesis
        </NavOptionListItem>
        <NavOptionListItem linkpath={"/salud/medicina"}>
          Implantes
        </NavOptionListItem>
      </NavDropDown>
    </NavDropDownContainer>
  );
}
