// import { PrismaClient } from '@prisma/client';
// import { readFileSync } from 'fs';

// const prisma = new PrismaClient();
// export const typeDefs = readFileSync('src/graphql/schema.graphql', 'utf-8');

// export const resolvers = {
//   Query: {
//     repos: async () => {
//       return prisma.repo.findMany();
//     },
//   },
//   Mutation: {
//     //@ts-ignore
//     createRepo: async (_: any, { url, targetFile, person }) => {
//       return prisma.repo.create({
//         data: {
//           url,
//           // @ts-ignore
//           targetFile,
//           person,
//         },
//       });
//     },
//   },
// };
