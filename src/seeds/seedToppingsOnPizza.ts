import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const toppingOnPizzaData = [
  { id_pizza: 1, idf_topping: 41 }, 
  { id_pizza: 1, idf_topping: 42 }, 
  { id_pizza: 2, idf_topping: 43 }, 
  { id_pizza: 2, idf_topping: 44 }, 
  { id_pizza: 2, idf_topping: 45 }, 
  { id_pizza: 2, idf_topping: 46 }, 
 
];

async function main() {
  const createToppingOnPizza = toppingOnPizzaData.map(async (data) => {
    return prisma.toppingOnPizza.create({
      data: {
        id_pizza: data.id_pizza,
        idf_topping: data.idf_topping,
      },
    });
  });

  await Promise.all(createToppingOnPizza);
  console.log('ToppingOnPizza records created successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
