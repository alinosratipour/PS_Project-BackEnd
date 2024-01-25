import { PrismaClient } from '@prisma/client';
export interface Context {
    prisma: PrismaClient;
    disconnect: () => void;
}
declare const context: Context;
export default context;
