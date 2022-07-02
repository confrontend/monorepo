import path from "path";
import { promises as fs } from "fs";
/** NOT IN USE */
export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd());
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/resume.json",
    "utf8"
  );
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
