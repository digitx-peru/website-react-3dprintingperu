import ExpansionTableRow from "./ExpansionTableRow";

export default function ExpansionTable({ record }) {

  const properties = {
    composition: {
      name: "Composition",
      value: record.composition,
    },

    technology: {
      name: "Technology",
      value: record.technology,
    },

    liquidDensity: {
      name: `Density liquid (g/cm3)`,
      value: record.density?.liquid?.value,
    },

    solidDensity: {
      name: "Density solid (g/cm3)",
      value: record.density?.solid?.value,
    },

    impactStrenghtNotchedIzod: {
      name: `IS Notched Izod (J/m)`,
      value:
        record && record.impactStrength && record.impactStrength["Notched Izod"]
          ? `${
              record.impactStrength["Notched Izod"].min +
              " - " +
              record.impactStrength["Notched Izod"].max
            }`
          : undefined,
    },

    impactStrenghtUnnotchedIzod: {
      name: `IS Unnotched Izod (J/m)`,
      value:
        record &&
        record.impactStrength &&
        record.impactStrength["Unnotched Izod"]
          ? `${
              record.impactStrength["Unnotched Izod"].min +
              " - " +
              record.impactStrength["Unnotched Izod"].max
            }`
          : undefined,
    },

    coefThermalExpansion20to50: {
      name: `Thermal Expansion@-20to50C (ppm/Celsius)`,
      value:
        record &&
        record.coefThermalExpansion &&
        record.coefThermalExpansion["-20to50C"]
          ? `${
              record.coefThermalExpansion["-20to50C"].min +
              " - " +
              record.coefThermalExpansion["-20to50C"].max
            }`
          : undefined,
    },

    coefThermalExpansion75to180: {
      name: `Thermal Expansion@75to180C (ppm/Celsius)`,
      value:
        record &&
        record.coefThermalExpansion &&
        record.coefThermalExpansion["75to180C"]
          ? `${
              record.coefThermalExpansion["75to180C"].min +
              " - " +
              record.coefThermalExpansion["75to180C"].max
            }`
          : undefined,
    },

    heatDistortionTemp045: {
      name: `Heat Distortion Temp@0.45Mpa (Celsius)`,
      value:
        record &&
        record.heatDistortionTemp &&
        record.heatDistortionTemp["0.45Mpa"]
          ? `${
              record.heatDistortionTemp["0.45Mpa"].min +
              " - " +
              record.heatDistortionTemp["0.45Mpa"].max
            }`
          : undefined,
    },

    heatDistortionTemp182: {
      name: `Heat Distortion Temp@1.82Mpa (Celsius)`,
      value:
        record &&
        record.heatDistortionTemp &&
        record.heatDistortionTemp["1.82Mpa"]
          ? `${
              record.heatDistortionTemp["1.82Mpa"].min +
              " - " +
              record.heatDistortionTemp["1.82Mpa"].max
            }`
          : undefined,
    },

    tensileStrength: {
      name: `Tensile Strength (mpa)`,
      value:
        record && record.tensileStrength
          ? `${
              record.tensileStrength?.min + " - " + record.tensileStrength?.max
            }`
          : undefined,
    },

    yieldStrength: {
      name: `Yield Strength (mpa)`,
      value:
        record && record.yieldStrength
          ? `${record.yieldStrength?.min + " - " + record.yieldStrength?.max}`
          : undefined,
    },

    tensileModulus: {
      name: `Tensile Moudlus (mpa)`,
      value:
        record && record.tensileModulus
          ? `${record.tensileModulus?.min + " - " + record.tensileModulus?.max}`
          : undefined,
    },

    waterAbsorption: {
      name: `Water Absorption (%)`,
      value:
        record && record.waterAbsorption
          ? record.waterAbsorption?.value
          : undefined,
    },

    flexuralStrength: {
      name: `Flexural Strength (mpa)`,
      value: record.flexuralStrength
        ? `${
            record.flexuralStrength?.min + " - " + record.flexuralStrength?.max
          }`
        : undefined,
    },

    flexuralModulus: {
      name: `Flexural Modulus (mpa)`,
      value: record.flexuralModulus
        ? `${record.flexuralModulus?.min + " - " + record.flexuralModulus?.max}`
        : undefined,
    },

    dielectricStrength: {
      name: `Dielectric Strength@3.0mm thickness (kV/mm)`,
      value: record.dielectricStrength
        ? `${
            record.dielectricStrength?.min +
            " - " +
            record.dielectricStrength?.max
          }`
        : undefined,
    },

    dielectricConstant: {
      name: `Dielectric Constant@ 1 MHz`,
      value: record.dielectricConstant
        ? `${
            record.dielectricConstant?.min +
            " - " +
            record.dielectricConstant?.max
          }`
        : undefined,
    },

    dissipationFactor: {
      name: `Dissipation Factor@ 1 MHz`,
      value: record.dissipationFactor
        ? `${
            record.dissipationFactor?.min +
            " - " +
            record.dissipationFactor?.max
          }`
        : undefined,
    },

    glassTransitionTemp_Tg: {
      name: `Glass Transition Temp (Celsius)`,
      value: record.glassTransitionTemp_Tg
        ? `${
            record.glassTransitionTemp_Tg?.min +
            " - " +
            record.glassTransitionTemp_Tg?.max
          }`
        : undefined,
    },

    elongationAtBreak: {
      name: `Elongation at Break (%)`,
      value: record.elongationAtBreak
        ? `${
            record.elongationAtBreak?.min +
            " - " +
            record.elongationAtBreak?.max
          }`
        : undefined,
    },

    elongationAtYield: {
      name: `Elongation at Yield (Celsius)`,
      value: record.elongationAtYield
        ? `${
            record.elongationAtYield?.min +
            " - " +
            record.elongationAtYield?.max
          }`
        : undefined,
    },

    hardness: {
      name: `Hardness Shore D`,
      // value: `${record.hardness?.min + " - " + record.hardness?.max}`,
      value: undefined,
    },

    ulFlammability: {
      name: `Flammability`,
      value: record.ulFlammability
        ? `${record.ulFlammability?.value}`
        : undefined,
    },
  };

  return (
    <table className="materialDetailTable">
      <tbody>
        <ExpansionTableRow
          leftProperty={properties.composition}
          rightProperty={properties.technology}
        />
        <ExpansionTableRow
          leftProperty={properties.liquidDensity}
          rightProperty={properties.impactStrenghtNotchedIzod}
        />
        <ExpansionTableRow
          leftProperty={properties.solidDensity}
          rightProperty={properties.impactStrenghtUnnotchedIzod}
        />
        <ExpansionTableRow
          leftProperty={properties.coefThermalExpansion20to50}
          rightProperty={properties.heatDistortionTemp045}
        />
        <ExpansionTableRow
          leftProperty={properties.coefThermalExpansion75to180}
          rightProperty={properties.heatDistortionTemp182}
        />
        <ExpansionTableRow
          leftProperty={properties.tensileStrength}
          rightProperty={properties.yieldStrength}
        />
        <ExpansionTableRow
          leftProperty={properties.tensileModulus}
          rightProperty={properties.flexuralStrength}
        />
        <ExpansionTableRow
          leftProperty={properties.waterAbsorption}
          rightProperty={properties.flexuralModulus}
        />
        <ExpansionTableRow
          leftProperty={properties.dielectricStrength}
          rightProperty={properties.glassTransitionTemp_Tg}
        />
        <ExpansionTableRow
          leftProperty={properties.dielectricConstant}
          rightProperty={properties.elongationAtBreak}
        />
        <ExpansionTableRow
          leftProperty={properties.dissipationFactor}
          rightProperty={properties.elongationAtYield}
        />
        <ExpansionTableRow
          leftProperty={properties.hardness}
          rightProperty={properties.ulFlammability}
        />
      </tbody>
    </table>
  );
}
