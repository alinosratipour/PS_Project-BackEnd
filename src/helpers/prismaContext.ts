
import { PrismaClient } from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

const context: Context = {
  prisma,
};

export default context;

