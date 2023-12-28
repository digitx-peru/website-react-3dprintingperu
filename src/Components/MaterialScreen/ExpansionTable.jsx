export default function ExpansionTable({ record }) {
  return (
    <table className="materialDetailTable">
      <tbody>
        <tr>
          <td>Density {record.density.solid.unit}</td>
          <td className="valueCell">{record.value ?? "-"}</td>
          <td className="leftPaddingCell">Impact Strength {record.impactStrength["Notched Izod"].unit}</td>
          <td className="valueCell">
            {record.impactStrength["Notched Izod"]?.min
              ? record.impactStrength["Notched Izod"]?.min + " - " + record.impactStrength["Notched Izod"]?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Tensile Strength {record.tensileStrength?.unit}</td>
          <td className="valueCell">
            {record.tensileStrength?.min
              ? record.tensileStrength?.min +
                " - " +
                record.tensileStrength?.max
              : "-"}
          </td>
          <td className="leftPaddingCell">Tensile Modulus {record.tensileModulus?.unit}</td>
          <td className="valueCell">
            {record.tensileModulus?.min
              ? record.tensileModulus?.min + " - " + record.tensileModulus?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Hardness</td>
          <td className="valueCell">
            {record.Hardness?.min
              ? record.Hardness?.min + " - " + record.Hardness?.max
              : "-"}
          </td>
          <td className="leftPaddingCell">Elongation At Break {record.elongationAtBreak.unit}</td>
          <td className="valueCell">
            {record.elongationAtBreak?.min
              ? record.elongationAtBreak?.min +
                " - " +
                record.elongationAtBreak?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Heat Distortion Temp @045mpa (°C)</td>
          <td className="valueCell">
            {record.heatDistortionTemp045mpa?.min
              ? record.heatDistortionTemp045mpa?.min +
                " - " +
                record.heatDistortionTemp045mpa?.max
              : "-"}
          </td>
          <td className="leftPaddingCell">Heat Distortion Temp @182mpa (°C)</td>
          <td className="valueCell">
            {record.heatDistortionTemp182mpa?.min
              ? record.heatDistortionTemp182mpa?.min +
                " - " +
                record.heatDistortionTemp182mpa?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Flexural Modulus (mpa)</td>
          <td className="valueCell">
            {record.flexuralModulus?.min
              ? record.flexuralModulus?.min +
                " - " +
                record.flexuralModulus?.max
              : "-"}
          </td>
          <td className="leftPaddingCell">Flexural Strength (mpa)</td>
          <td className="valueCell">
            {record.flexuralStrength?.min
              ? record.flexuralStrength?.min +
                " - " +
                record.flexuralStrength?.max +
                " " +
                record.flexuralStrength?.unit
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Water Absorption@24hrs (%)</td>
          <td className="valueCell">
            {record.waterAbsorption.value ?? "-"}
          </td>
          <td className="leftPaddingCell">Composition</td>
          <td className="valueCell">{record.composition ?? "-"}</td>
        </tr>
        <tr>
          <td>UL Flammability</td>
          <td className="valueCell">{record.ULFlammability.value ?? "-"}</td>
          <td className="leftPaddingCell">Bottle Size (kg)</td>
          <td className="valueCell">{record.format.quantity ?? "-"}</td>
        </tr>
      </tbody>
    </table>
  );
}
