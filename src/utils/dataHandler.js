const materialDataURL = process.env.REACT_APP_DATA_API_URL + "materials";
const printerDataURL = process.env.REACT_APP_DATA_API_URL + "printers";
const printerNameListDataURL =
  process.env.REACT_APP_DATA_API_URL + "printers/list";
const technologyNameListDataURL =
  process.env.REACT_APP_DATA_API_URL + "technologies/list";

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

export async function getPrintersNamesListFromAPI() {
  console.log("Fetching technology names");
  const response = await fetch(printerNameListDataURL);
  const printersNamesListJsonData = await response.json();

  return printersNamesListJsonData;
}

export async function getTechnologiesNamesListFromAPI() {
  console.log("Fetching technology names");
  const response = await fetch(technologyNameListDataURL);
  const technologiesNamesListJsonData = await response.json();

  return technologiesNamesListJsonData;
}
