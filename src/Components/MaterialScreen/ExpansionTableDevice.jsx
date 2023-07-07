export default function ExpansionTableDevice({ record }) {
  return (
    <table className="materialDetailTable">
      <tbody>
        <tr>
          <td>Density (g/cm³)</td>
          <td className="valueCell">{record["density_g/cm3"].value ?? "-"}</td>
        </tr>
        <tr>
          <td>Impact Strength (J/m)</td>
          <td className="valueCell">
            {record.impactStrength?.min
              ? record.impactStrength?.min + " - " + record.impactStrength?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Tensile Strength (mpa)</td>
          <td className="valueCell">
            {record.tensileStrength?.min
              ? record.tensileStrength?.min +
                " - " +
                record.tensileStrength?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Tensile Modulus (mpa)</td>
          <td className="valueCell">
            {record.tensileModulus?.min
              ? record.tensileModulus?.min + " - " + record.tensileModulus?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Shore-D Hardness</td>
          <td className="valueCell">
            {record.shoreDHardness?.min
              ? record.shoreDHardness?.min + " - " + record.shoreDHardness?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Elongation At Break (%)</td>
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
        </tr>
        <tr>
          <td>Heat Distortion Temp @182mpa (°C)</td>
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
        </tr>
        <tr>
          <td>Flexural Strength (mpa)</td>
          <td className="valueCell">
            {record.flexuralStrength?.min
              ? record.flexuralStrength?.min +
                " - " +
                record.flexuralStrength?.max
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Water Absorption@24hrs (%)</td>
          <td className="valueCell">
            {record.waterAbsorption_24hrs.value ?? "-"}
          </td>
        </tr>
        <tr>
          <td>Composition</td>
          <td className="valueCell">{record.composition ?? "-"}</td>
        </tr>
        <tr>
          <td>UL Flammability</td>
          <td className="valueCell">{record.ULFlammability.value ?? "-"}</td>
        </tr>
        <tr>
          <td>Bottle Size (kg)</td>
          <td className="valueCell">{record.format.quantity ?? "-"}</td>
        </tr>
      </tbody>
    </table>
  );
}
