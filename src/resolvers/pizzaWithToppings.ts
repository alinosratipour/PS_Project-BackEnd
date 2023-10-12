import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listPizzasWithToppingsResolver = {
  Query: {
    listPizzasWithToppings: async () => {
      const pizzasWithToppings = await prisma.pizza.findMany({
        include: {
          toppingsOnPizza: {
            include: {
              topping: true, // Include the related Toppings
            },
          },
        },
      });

      return pizzasWithToppings.map((pizza) => ({
        ...pizza,
        toppingsOnPizza: pizza.toppingsOnPizza.map((toppingOnPizza) => ({
          ...toppingOnPizza,
          toppings: toppingOnPizza.topping, // Use the related Toppings as toppings
        })),
      }));
    },
  },
};

export default listPizzasWithToppingsResolver;
