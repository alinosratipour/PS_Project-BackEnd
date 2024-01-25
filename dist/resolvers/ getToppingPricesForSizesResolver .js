"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getToppingPricesForSizesResolver = async (_parent, _args, _context, _info) => {
    try {
        // Fetch all sizes
        const sizes = await _context.prisma.size.findMany();
        const toppingPricesBySize = await Promise.all(sizes.map(async (size) => {
            // Fetch topping prices for the current size
            const toppingPrices = await _context.prisma.toppingPrice.findMany({
                where: {
                    id_size: size.id_size,
                },
            });
            return {
                size: size.p_size,
                toppingPrices: toppingPrices,
            };
        }));
        return toppingPricesBySize;
    }
    catch (error) {
        console.error('Error fetching topping prices for sizes:', error);
        throw new Error('Failed to fetch topping prices for sizes.');
    }
    finally {
        await _context.prisma.$disconnect();
    }
};
exports.default = getToppingPricesForSizesResolver;
//# sourceMappingURL=%20getToppingPricesForSizesResolver%20.js.map