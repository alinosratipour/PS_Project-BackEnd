
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const pizzaResolver = {
    Query: {
      bases: async () => {
        try {
          // Fetch all bases from your database
          const bases = await prisma.base.findMany();
          return bases; // Return the list of bases
        } catch (error) {
          console.error('Error fetching bases:', error);
          throw error; // Handle errors appropriately
        }
      },
    },
  };
  
  export default pizzaResolver;