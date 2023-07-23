import { industryContent } from "../content/industry.content.js";
import { healthContent } from "../content/health.content.js";
import { heroContent } from "../content/hero.content.js";

const materialDataURL = process.env.REACT_APP_DATA_API_URL + "materials";
const printerDataURL = process.env.REACT_APP_DATA_API_URL + "printers";

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

export function getHeroContentFromDB(page) {
  switch (page) {
    case "home":
      return heroContent.home;
    case "industria":
      return heroContent.industria;
    case "salud":
      return heroContent.salud;
    default:
      return heroContent.home;
  }
}

export function getIndustryContentFromDB(industryType) {
  switch (industryType) {
    case "automotriz":
      return industryContent.automobileContent;
    case "fundicion":
      return industryContent.foundryContent;
    case "joyeria":
      return industryContent.jewelryContent;
    case "replicas":
      return industryContent.replicaContent;
    default:
      return industryContent.foundryContent;
  }
}

export function getHealthContentFromDB(healthType) {
  switch (healthType) {
    case "medicina":
      return healthContent.medicineContent;
    case "odontologia":
      return healthContent.dentalContent;
    default:
      return healthContent.medicineContent;
  }
}

export function getNewsContentFromDB(healthType) {
  switch (healthType) {
    case "medicina":
      return healthContent.medicineContent;
    case "odontologia":
      return healthContent.dentalContent;
    default:
      return healthContent.medicineContent;
  }
}
