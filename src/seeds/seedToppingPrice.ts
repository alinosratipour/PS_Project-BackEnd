import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const toppingPrices = [
  { id_size: 1, price_topping: 1.5 },
  { id_size: 2, price_topping: 2.0 },
  { id_size: 3, price_topping: 2.5 },
  { id_size: 4, price_topping: 3.5 },
];

async function main() {
  const createToppingPrices = toppingPrices.map(async (toppingPrice) => {
    return prisma.toppingPrice.create({
      data: {
        id_size: toppingPrice.id_size,
        price_topping: toppingPrice.price_topping,
      },
    });
  });

  await Promise.all(createToppingPrices);
  console.log('Topping prices created successfully');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
