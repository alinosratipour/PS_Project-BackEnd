"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllPizzasListResolver = async (_parent, _args, _context, // Use the Context type
_info) => {
    try {
        const pizzas = await _context.prisma.pizza.findMany();
        return pizzas;
    }
    catch (error) {
        console.error("Error fetching pizza data:", error);
        throw new Error("Unable to fetch pizza data");
    }
    finally {
        await _context.prisma.$disconnect();
    }
};
exports.default = getAllPizzasListResolver;
//# sourceMappingURL=getAllPizzasListResolver.js.map