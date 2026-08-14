import useBreakpoints from "../../hooks/useBreakpoints";

export default function PhotopolymerScreenTable() {
  //Check windows size
  const { isTablet, isDesktop } = useBreakpoints();

  const styles = {
    table: {
      fontSize: "10px",
      borderCollapse: "collapse",
      ...(isTablet && {
        width: "100%",
        fontSize: "12px",
      }),
      ...(isDesktop && {
        width: "60%",
        fontSize: "12px",
      }),
    },
    row: {
      fontSize: "16px",
      ...(isTablet && {
        height: "60px",
      }),
    },
    column: {
      ...(isTablet && {
        width: "25%",
      }),
    },
    spacer: {
      width: "10px",
    },
  };

  return (
    <table className="Figure 4 capacity" style={styles.table}>
      <colgroup>
        <col style={styles.column} />
        <col style={styles.column} />
        {isTablet && <col style={styles.column} />}
      </colgroup>
      <tr style={styles.row}>
        <th>Descripción</th>
        {!isTablet && !isDesktop && <th style={styles.spacer}></th>}
        <th>Valor</th>
        {isTablet && <th>Consideraciones</th>}
      </tr>
      <tr style={styles.row}>
        <td>Máximo tamaño de pieza</td>
        {!isTablet && !isDesktop && <td style={styles.spacer}></td>}
        <td>XYZ: 124 x 70 x 195 mm</td>
        {isTablet && <td>Piezas más grandes pueden ensamblarse</td>}
      </tr>
      <tr style={styles.row}>
        <td>Resolución en Z</td>
        {!isTablet && !isDesktop && <td style={styles.spacer}></td>}
        <td>20u a 50u</td>
        {isTablet && <td>Depende del material</td>}
      </tr>
      <tr style={styles.row}>
        <td>Resistencia a la flexión</td>
        {!isTablet && !isDesktop && <td style={styles.spacer}></td>}
        <td>22 - 130 mpa</td>
        {isTablet && (
          <td rowspan="2">
            Si necesitas piezas que puedan resistir esfuerzos mecánicos (torque)
            te invitamos a ver los metodos como{" "}
            <b>impresión en filamento (FDM) o vaciado con silicona y uretano</b>
          </td>
        )}
      </tr>
      <tr style={styles.row}>
        <td>Modulo de flexión</td>
        {!isTablet && !isDesktop && <td style={styles.spacer}></td>}
        <td>680 - 4300 mpa</td>
      </tr>
    </table>
  );
}
