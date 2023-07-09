const materialDataURL = process.env.REACT_APP_DATA_API_URL + "materials"
const printerDataURL = process.env.REACT_APP_DATA_API_URL + "printers"

export async function getPrintersFromDB() {
  console.log("Fetching printers");
  const response = await fetch(printerDataURL);
  const printersJsonData = await response.json();

  return printersJsonData;
}

export async function getMaterialsFromDB() {
  console.log("Fetching materials");
  const response = await fetch(materialDataURL);
  const materialsJsonData = await response.json();

  return materialsJsonData;
}
