import { IResume } from "./../../../blog/src/pages/resume/resume.types";
import path from "path";
import { promises as fs } from "fs";

export const getResume = async (): Promise<IResume> => {
  const jsonDirectory = path.join(process.cwd());
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/public/resume.json",
    "utf8"
  );

  return JSON.parse(fileContents);
};
