import axios from 'axios';
import { funcFinder } from './util';
import { PackageJson } from '../interfaces/package.interface';

export async function scrape(
  repoOwner: string,
  repoName: string,
  fileName: string,
): Promise<PackageJson> {
  const baseURI: string = 'https://raw.githubusercontent.com';
  let scraperResponse: object = {};
  let errorResponse: object = {};
  const apiUrl = `${baseURI}/${repoOwner}/${repoName}/${fileName}`;

  // get xx.json file from raw.github
  await axios({
    method: 'get',
    url: apiUrl,
  })
    .then((response) => {
      scraperResponse = response.data;
    })
    .catch((err) => {
      errorResponse = err;
    });

  const parseFunction = funcFinder[fileName];

  let response = parseFunction(this.scraperResponse);
  return response;
}
