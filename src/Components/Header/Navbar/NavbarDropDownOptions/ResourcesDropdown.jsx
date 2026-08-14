import NavDropDownContainer from "./NavDropDownComponents/NavDropDownContainer";
import NavDropDown from "./NavDropDownComponents/NavDropDownOption";
import NavOptionListItem from "./NavDropDownComponents/NavOptionListItem";

export default function ResourcesDropdown() {
  return (
    <NavDropDownContainer>
      <NavDropDown title={"Blog"}>
        <NavOptionListItem linkpath={"/blog/casos-de-exito"}>
          Casos de éxito
        </NavOptionListItem>
        <NavOptionListItem linkpath={"/productos/preguntas-frecuentes"}>
          Preguntas frecuentes
        </NavOptionListItem>
      </NavDropDown>
      <NavDropDown title={"Eventos"}>
        <NavOptionListItem linkpath={"/eventos"}>
          Próximos eventos
        </NavOptionListItem>
      </NavDropDown>
    </NavDropDownContainer>
  );
}
