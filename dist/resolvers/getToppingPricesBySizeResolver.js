"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export default getToppingPricesBySizeResolver;
const getToppingPricesBySizeResolver = async (_parent, args, _context, _info) => {
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
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching topping prices by size:', error);
            throw new Error('Unable to fetch topping prices by size');
        }
        else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occurred');
        }
    }
    finally {
        await _context.prisma.$disconnect();
    }
};
exports.default = getToppingPricesBySizeResolver;
//# sourceMappingURL=getToppingPricesBySizeResolver.js.map