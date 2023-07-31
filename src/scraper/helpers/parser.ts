import axios from 'axios';
import { PackageJson } from '../interfaces/package.interface';
import * as semver from 'semver';

export async function parsePackageJson(packageContent): Promise<PackageJson> {
  const outdatedDependencies: { [key: string]: string } = {};
  const outdatedDevDependencies: { [key: string]: string } = {};

  // deps
  for (const dep in packageContent.dependencies) {
    const currentVersion = packageContent.dependencies[dep];
    const latestVersion = await getLatestVersion(dep);

    if (semver.lt(currentVersion, latestVersion)) {
      outdatedDependencies[dep] = latestVersion;
    }
    console.log('outdated deps');
    console.log(outdatedDependencies);
  }

  // devDeps
  for (const devDep in packageContent.devDependencies) {
    const currentVersion = packageContent.dependencies[devDep];
    const latestVersion = await getLatestVersion(devDep);

    if (semver.lt(currentVersion, latestVersion)) {
      outdatedDevDependencies[devDep] = latestVersion;
    }
    console.log('outdated devDep');
    console.log(outdatedDevDependencies);
  }

  return {
    dependencies: outdatedDependencies,
    devDependencies: outdatedDevDependencies,
  } as PackageJson;
}

async function getLatestVersion(packageName: string): Promise<string> {
  const response = await axios.get(
    `https://registry.npmjs.org/${packageName}/latest`,
  );
  return response.data.version;
}
