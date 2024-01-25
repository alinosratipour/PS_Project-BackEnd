"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seed() {
    // Insert data into the Toppings table
    await prisma.toppings.createMany({
        data: [
            { name: 'Mushroom' },
            { name: 'Pepperoni' },
            { name: 'Onion' },
            { name: 'Sausage' },
            { name: 'Green Pepper' },
            { name: 'Black Olive' },
            { name: 'Pineapple' },
            { name: 'Bacon' },
            { name: 'Spinach' },
            { name: 'Tomato' },
            // Add more toppings as needed
        ],
    });
    // ... (other seeding data for ToppingPrice and ToppingOnPizza tables)
    await prisma.$disconnect();
}
seed().catch((error) => {
    console.error('Error seeding database:', error);
});
//# sourceMappingURL=seedToppings.js.map