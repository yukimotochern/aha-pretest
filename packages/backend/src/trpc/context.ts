import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import { okResponse, errorResponse } from '@aha/api';
import { PrismaClient } from '@prisma/client';

import { env } from '../environments/environment';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.postgresDatabaseUrl,
    },
  },
});

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' };
  return {
    req,
    res,
    user,
    logger: req.log,
    okResponse,
    errorResponse,
    prisma,
    redis: req.server.redis,
  };
}
export type Context = inferAsyncReturnType<typeof createContext>;
