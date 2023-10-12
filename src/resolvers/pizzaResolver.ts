// src/pizzaResolver.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pizzaResolver = {
  Query: {
    pizzas: async () => {
      const pizzas = await prisma.pizza.findMany();
      return pizzas;
    },
  },
};

export default pizzaResolver;
