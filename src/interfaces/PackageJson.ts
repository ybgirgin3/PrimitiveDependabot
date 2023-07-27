export default interface PackageJson {
  dependencies?: { [key: string]: string },
  devDependencies?: { [key: string]: string },
}

export interface Package {
  name: string,
  version: string
}

export interface NewestVersion extends Package {
  newVersion?: string
}