import { PrismaClient } from '@prisma/client';
import { Repo } from '../interfaces/RequestBody';

const prisma = new PrismaClient();

// create data
const createData = async (repo: Repo) => {
  await prisma.repo.create({
    data: {
      repo.name,
      repo.url,
      repo.targetFile,
      repo.
    },
  });
};
