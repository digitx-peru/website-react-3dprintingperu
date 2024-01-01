import ExpansionTableDeviceRow from "./ExpansionTableDeviceRow";

export default function ExpansionTableDevice({ record }) {
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
              record.impactStrength["Notched Izod"].min -
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
              record.impactStrength["Unnotched Izod"].min -
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
              record.coefThermalExpansion["-20to50C"].min -
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
              record.coefThermalExpansion["75to180C"].min -
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
              record.heatDistortionTemp["0.45Mpa"].min -
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
              record.heatDistortionTemp["1.82Mpa"].min -
              record.heatDistortionTemp["1.82Mpa"].max
            }`
          : undefined,
    },

    tensileStrength: {
      name: `Tensile Strength (mpa)`,
      value: `${record.tensileStrength?.min - record.tensileStrength?.max}`,
    },

    yieldStrength: {
      name: `Yield Strength (mpa)`,
      value: `${record.yieldStrength?.min - record.yieldStrength?.max}`,
    },

    tensileModulus: {
      name: `Tensile Moudlus (mpa)`,
      value: `${record.tensileModulus?.min - record.tensileModulus?.max}`,
    },

    waterAbsorption: {
      name: `Water Absorption (%)`,
      value: record.waterAbsorption?.value,
    },

    flexuralStrength: {
      name: `Flexural Strength (mpa)`,
      value: `${record.flexuralStrength?.min - record.flexuralStrength?.max}`,
    },

    flexuralModulus: {
      name: `Flexural Modulus (mpa)`,
      value: `${record.flexuralModulus?.min - record.flexuralModulus?.max}`,
    },

    dielectricStrength: {
      name: `Dielectric Strength@3.0mm thickness (kV/mm)`,
      value: `${
        record.dielectricStrength?.min - record.dielectricStrength?.max
      }`,
    },

    dielectricConstant: {
      name: `Dielectric Constant@ 1 MHz`,
      value: `${
        record.dielectricConstant?.min - record.dielectricConstant?.max
      }`,
    },

    dissipationFactor: {
      name: `Dissipation Factor@ 1 MHz`,
      value: `${record.dissipationFactor?.min - record.dissipationFactor?.max}`,
    },

    glassTransitionTemp_Tg: {
      name: `Glass Transition Temp (Celsius)`,
      value: `${
        record.glassTransitionTemp_Tg?.min - record.glassTransitionTemp_Tg?.max
      }`,
    },

    elongationAtBreak: {
      name: `Elongation at Break (%)`,
      value: `${record.elongationAtBreak?.min - record.elongationAtBreak?.max}`,
    },

    elongationAtYield: {
      name: `Elongation at Yield (Celsius)`,
      value: `${record.elongationAtYield?.min - record.elongationAtYield?.max}`,
    },

    hardness: {
      name: `Hardness Shore D`,
      value: `${record.hardness?.min - record.hardness?.max}`,
    },

    ulFlammability: {
      name: `Flammability`,
      value: `${record.ulFlammability?.min - record.ulFlammability?.max}`,
    },
  };

  const renderExpansionTableRows = () => {
    return Object.keys(properties).map((key, index) => (
      <ExpansionTableDeviceRow key={index} property={properties[key]} />
    )).sort();
  };

  return (
    <table className="materialDetailTable">
      <tbody>
      {renderExpansionTableRows()}
      </tbody>
    </table>
  );
}
