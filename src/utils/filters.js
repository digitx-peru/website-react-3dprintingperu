///////////////////////////////////////////////MATERIAL

export function printerFiltering(material, printerFilterCriteria) {
  if (printerFilterCriteria.length !== 0) {
    const result = material.printers.some((materialPrinter) =>
      printerFilterCriteria.includes(materialPrinter)
    );
    return result;
  }
  return material;
}

export function propertyFiltering(material, propertyFilterCriteria) {
  const tensileFilter = propertyValueFiltering(
    material,
    propertyFilterCriteria,
    "tensileModulus"
  );

  const elongationFilter = propertyValueFiltering(
    material,
    propertyFilterCriteria,
    "elongationAtBreak"
  );

  const heatFilter = propertyValueFiltering(
    material,
    propertyFilterCriteria,
    "heatDistortionTemp182mpa"
  );

  return tensileFilter && elongationFilter && heatFilter;
}

function propertyValueFiltering(
  material,
  propertyFilterCriteria,
  propertyName
) {
  const minValue =
    propertyFilterCriteria[propertyName].min && material[propertyName]
      ? parseFloat(propertyFilterCriteria[propertyName].min).toFixed(1) <=
        material[propertyName].min
      : true;

  const maxValue =
    propertyFilterCriteria[propertyName].max && material[propertyName]
      ? parseFloat(propertyFilterCriteria[propertyName].max).toFixed(1) >=
        material[propertyName].max
      : true;

  return minValue && maxValue;
}

///////////////////////////////////////////////PRINTERS

export function volumeFiltering(printer, volumeFilterCriteria) {
  const xValue = dimensionValueFiltering(printer, volumeFilterCriteria, "x");

  const yValue = dimensionValueFiltering(printer, volumeFilterCriteria, "y");

  const zValue = dimensionValueFiltering(printer, volumeFilterCriteria, "z");

  return xValue && yValue && zValue;
}

function dimensionValueFiltering(printer, volumeFilterCriteria, dimensionName) {
  return volumeFilterCriteria[dimensionName]
    ? printer.builVolume[dimensionName] >=
        parseFloat(volumeFilterCriteria[dimensionName]).toFixed(1)
    : true;
}

///////////////////////////////////////////////GENERIC

export function applicationFiltering(unit, applicationFilterCriteria) {
  if (applicationFilterCriteria.length !== 0) {
    const result = unit.aplications.some((application) =>
      applicationFilterCriteria.includes(application)
    );
    return result;
  }
  return unit;
}

export function technologyFiltering(unit, technologyFilterCriteria) {
  return technologyFilterCriteria.length !== 0
    ? technologyFilterCriteria.includes(unit.technology.value)
    : unit;
}

export function technologyLabelValueSwap(technologies) {
  return technologies.map((tech) => {
    switch (tech) {
      case "Direct Light Processing":
        return "DLP";

      case "MultiJet Printing":
        return "MJP";

      case "ColorJet Printing":
        return "CJP";

      case "Direct Metal Printing":
        return "DMP";

      case "Stereolithography":
        return "SLA";

      case "Extrusion":
        return "EXT";

      case "Selective Laser Sintering":
        return "SLS";

      default:
        break;
    }
  });
}
