import { parsePackageJson } from './parser';

export const funcFinder = {
  'package.json': parsePackageJson,
  'compose.json': '',
};
