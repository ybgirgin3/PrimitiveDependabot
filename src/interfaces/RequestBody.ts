export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Repo {
  name: string; // repo owner name
  url: string;
  targetFile: string[];
}

export interface RequestBody {
  user: User[];
  repo: Repo[];
}
