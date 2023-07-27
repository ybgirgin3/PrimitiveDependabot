import axios from "axios";
import PackageJson, { NewestVersion, Package } from "../interfaces/PackageJson";
import { Repo } from "../interfaces/RequestBody";
import { runCommand } from "../helpers/runCommand";

const apiUrl: string = `https://raw.githubusercontent.com`;
export const readDepFile = async (repo: Repo): Promise<PackageJson | null> => {
  const url = `${apiUrl}/${repo.username}/${repo.repoName}/main/${repo.packageName}`;
  const response = await axios.get(url);
  if (response.status == 200) {
    return {
      dependencies: response.data["dependencies"],
      devDependencies: response.data["devDependencies"]
    };
  }
  return null;
};


// TODO: define a return value for getNewestVersion
export const getNewestVersion = (packageJsonData: PackageJson | null): NewestVersion[] | null => {
  if (packageJsonData === null) {
    return null;
  }

  const packagesWithNewestVersion: NewestVersion[] = [];

  if (packageJsonData?.dependencies) {
    for (const packageName in packageJsonData.dependencies) {
      const version = packageJsonData?.dependencies[packageName];
      const command = `npm`
      // runCommand()



      // exec(`npm show ${packageName} version`, (error, stdout, stderr) => {
      //   if (error) {
      //     console.warn("error while finding newer version", error);
      //     return null;
      //   }
      //
      //   packagesWithNewestVersion.push({
      //       name: packageName,
      //       version: version,
      //       newVersion: stdout.trim()
      //     }
      //   );
      // });
    }
  }
  return packagesWithNewestVersion;
};


