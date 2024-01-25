"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Get the existing sizes and their IDs
    const existingSizes = await prisma.size.findMany();
    const sizeIds = existingSizes.map((size) => size.id);
    // Get the existing toppings
    const existingToppings = await prisma.toppings.findMany();
    // Update the toppings to connect them to the sizes and add prices
    for (const topping of existingToppings) {
        const sizeConnections = sizeIds.map((sizeId) => ({
            size: { connect: { id: sizeId } }, // Type assertion
            price_topping: 0, // Update the pricing logic here
        }));
        await prisma.toppings.update({
            where: { id: topping.id },
            data: {
                toppingPrice: {
                    create: sizeConnections,
                },
            },
        });
        console.log(`Updated topping: ${topping.name}`);
    }
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seedToppingPrice.js.map