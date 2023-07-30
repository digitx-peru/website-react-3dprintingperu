export function printerFiltering(material, printerFilterCriteria) {
  if (printerFilterCriteria.length !== 0) {
    const result = material.printers.some((materialPrinter) => {
      printerFilterCriteria.includes(materialPrinter);
    });
    return result;
  }
  return material;
}

export function technologyFiltering(material, technologyFilterCriteria) {
  return technologyFilterCriteria.length !== 0
    ? technologyFilterCriteria.includes(material.technology)
    : material;
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

  return tensileFilter && elongationFilter && heatFilter
}

function propertyValueFiltering(
  material,
  propertyFilterCriteria,
  propertyName
) {

  const minValue = propertyFilterCriteria[propertyName].min && material[propertyName]
    ? parseFloat(propertyFilterCriteria[propertyName].min).toFixed(1) >=
        material[propertyName].min &&
      parseFloat(propertyFilterCriteria[propertyName].min).toFixed(1) <=
        material[propertyName].max
    : true;

  const maxValue = propertyFilterCriteria[propertyName].max && material[propertyName]
    ? parseFloat(propertyFilterCriteria[propertyName].max).toFixed(1) <=
      material[propertyName].max
    : true;

  return minValue && maxValue;
}
