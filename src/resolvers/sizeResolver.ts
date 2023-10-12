
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sizeResolver = {
  Query: {
    sizes: async () => {
      // Fetch all sizes from the database
      const sizes = await prisma.size.findMany(); // Note the use of 'Size' here
      return sizes;
    },
  },
};

export default sizeResolver;
