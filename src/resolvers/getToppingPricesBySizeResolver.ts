 import { Context } from '../helpers/prismaContext';

// const getToppingPricesBySizeResolver = async (
//   _parent: unknown,
//   _args: unknown,
//   _context: Context,
//   _info: unknown
// ) => {
//   try {
//     // Fetch all toppings
//     const toppings = await _context.prisma.toppings.findMany();

//     // Fetch all available sizes
//     const sizes = await _context.prisma.size.findMany();

//     // Fetch topping prices for all sizes
//     const toppingPrices = await _context.prisma.toppingPrice.findMany({
//       include: {
//         topping: true,
//       },
//     });

//     // Create a map of topping prices for quick lookup
//     const toppingPricesMap = new Map();
//     toppingPrices.forEach((toppingPrice) => {
//       const toppingId = toppingPrice.topping.id;
//       const sizeId = toppingPrice.id_size;
//       toppingPricesMap.set(`${toppingId}-${sizeId}`, {
//         id_size: sizeId,
//         name: toppingPrice.topping.name,
//         price: toppingPrice.price_topping,
//       });
//     });

//     // Initialize the result with null values
//     const result = sizes.map((size) => {
//       return {
//         id_size: size.id_size,
//         name: null,
//         price: null,
//       };
//     });

//     // Populate toppings and prices in the result
//     toppings.forEach((topping) => {
//       sizes.forEach((size) => {
//         const toppingPrice = toppingPricesMap.get(`${topping.id}-${size.id_size}`);
//         if (toppingPrice) {
//           const index = sizes.findIndex((s) => s.id_size === size.id_size);
//           result[index] = {
//             id_size: size.id_size,
//             name: toppingPrice.name,
//             price: toppingPrice.price,
//           };
//         }
//       });
//     });

//     return result;
//   } catch (error: unknown) {
//     console.error('Error fetching topping prices by size:', error);
//     throw new Error('Unable to fetch topping prices by size');
//   } finally {
//     await _context.prisma.$disconnect();
//   }
// };

// export default getToppingPricesBySizeResolver;
const getToppingPricesBySizeResolver = async (
  _parent: unknown,
  args: { id_size: number },
  _context: Context,
  _info: unknown
) => {
  try {
    const { id_size } = args;

    // Fetch topping prices for the specified id_size
    const toppingPrices = await _context.prisma.toppingPrice.findMany({
      where: {
        id_size,
      },
      include: {
        topping: true,
      },
    });

    return toppingPrices.map((toppingPrice) => ({
      id_size: toppingPrice.id_size,
      name: toppingPrice.topping.name,
      price: toppingPrice.price_topping,
    }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching topping prices by size:', error);
      throw new Error('Unable to fetch topping prices by size');
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred');
    }
  } finally {
    await _context.prisma.$disconnect();
  }
};

export default getToppingPricesBySizeResolver;
