import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sizeResolver = {
  Query: {
    getAllSizesWithRelatedBases: async () => {
      try {
        // Fetch all sizes with their related bases and prices
        const sizesWithBasesAndPrices = await prisma.size.findMany({
          include: {
            basePrice: {
              include: {
                base: true,
              },
            },
          },
        });

        // Process the data to format it as desired
        const formattedData = sizesWithBasesAndPrices.map((size) => ({
          size: size.p_size,
          price: size.price_topping,
          bases: size.basePrice.map((basePrice) => ({
            base: basePrice.base.name,
            price: basePrice.price_base,
          })),
        }));

        return formattedData;
      } catch (error) {
        console.error('Error fetching size data:', error);
        throw new Error('Unable to fetch size data');
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};

export default sizeResolver;
