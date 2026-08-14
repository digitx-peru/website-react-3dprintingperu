import { Link } from "react-router-dom";

import useMediaQuery from "../../../hooks/useMediaQuery";
import FooterNavColumn from "./FooterNavColumn";
import FootNavListItem from "./FootNavListItem";

export default function FooterNav() {
  const isDevice = useMediaQuery(768);

  const styles = {
    footerNav: {
      display: "flex",
      flexDirection: "row",
      gap: isDevice ? "20px" : "60px",
      justifyContent: isDevice ? "space-between" : "initial",
      borderLeft: "3px solid rgb(62,255,180)",
      paddingLeft: 30,
    },
    footerNavColumn: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
    },
    footerNavLink: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <nav className="footerNav" style={styles.footerNav}>
      {/* Footer Navigation Links */}
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <FooterNavColumn title={"Aplicaciones"}>
        <FootNavListItem
          linkTitle={"Prótesis"}
          linkpath={"/aplicaciones/salud/protesis"}
        />
        <FootNavListItem
          linkTitle={"Muebles"}
          linkpath={"/aplicaciones/consumidor-final/muebles"}
        />
        <FootNavListItem
          linkTitle={"Carcasas y cubiertas"}
          linkpath={"/aplicaciones/consumidor-final/carcasas-cubiertas"}
        />
        <FootNavListItem
          linkTitle={"Sellos y juntas"}
          linkpath={"/aplicaciones/consumidor-final/sellos-juntas"}
        />
        <FootNavListItem
          linkTitle={"Vaciado en joyería"}
          linkpath={"/aplicaciones/joyeria/vaciado"}
        />
        <FootNavListItem
          linkTitle={"Moldes en joyería"}
          linkpath={"/aplicaciones/joyeria/moldes"}
        />
        <FootNavListItem
          linkTitle={"Vaciado en fundición"}
          linkpath={"/aplicaciones/fundicion/vaciado"}
        />
        <FootNavListItem
          linkTitle={"Moldes en fundición"}
          linkpath={"/aplicaciones/fundicion/moldes"}
        />
      </FooterNavColumn>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <FooterNavColumn title={"Servicios"}>
        <FootNavListItem
          linkTitle={"Fotopolímeros avanzados"}
          linkpath={"/servicios/impresion-3D/fotopolimeros"}
        />
        <FootNavListItem
          linkTitle={"Patrones de joyería"}
          linkpath={"/servicios/impresion-3D/patrones-de-joyeria"}
        />
        <FootNavListItem
          linkTitle={"Silicona y poliuretano"}
          linkpath={"/servicios/produccion/silicona-y-poliuretano"}
        />
        <FootNavListItem
          linkTitle={"Diseño 3D"}
          linkpath={"/servicios/otros/diseño-3d"}
        />
        <FootNavListItem
          linkTitle={"Soporte Técnico"}
          linkpath={"/servicios/mantenimiento/soporte-tecnico"}
        />
      </FooterNavColumn>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <FooterNavColumn title={"Productos"}>
        <FootNavListItem
          linkTitle={"Impresoras"}
          linkpath={"/productos/impresoras"}
        />
        <FootNavListItem
          linkTitle={"Materiales"}
          linkpath={"/productos/materiales"}
        />
        <FootNavListItem
          linkTitle={"RhinoArtisan"}
          linkpath={"/productos/software/rhino-artisan"}
        />
      </FooterNavColumn>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
    </nav>
  );
}
