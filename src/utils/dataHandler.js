import printerDB from "../printerDB.test.json";
import materialDB from "../materialDB.test.json";

export function getPrintersFromDB() {
  return printerDB.printers;
}

export function getMaterialsFromDB() {
  return materialDB.materials;
}
