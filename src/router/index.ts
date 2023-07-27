import express, { Request, Response } from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import { User, Repo } from '../interfaces/RequestBody';
import { controller } from '../controllers';
// const { graphqlHTTP } = require('express-graphql');
import { graphqlHTTP } from 'graphql-http';

const router = express.Router();

router.get<{}, MessageResponse>('/', async (req: Request, res: Response) => {
  // export interface RequestBody {
  //   user: User[];
  //   repo: Repo[];
  // }

  const user: User[] | User = req.body.user;
  const repo: Repo[] | Repo = req.body.repo;

  controller(user, repo);

  res.json({
    message: `hello`,
  });
});

export default router;
