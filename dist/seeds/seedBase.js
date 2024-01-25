"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedBase() {
    try {
        // Define an array of base data to insert
        const baseData = [
            {
                name: 'DeepPan',
                increase_price: 2, // Adjust this value as needed
            },
            {
                name: 'ThinCrust',
                increase_price: 1, // Adjust this value as needed
            },
            {
                name: 'StuffedCrust',
                increase_price: 3, // Adjust this value as needed
            },
        ];
        // Insert base data into the database
        const createdBase = await prisma.base.createMany({
            data: baseData,
        });
        console.log('Base records inserted:', createdBase);
    }
    catch (error) {
        console.error('Error seeding base data:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedBase();
//# sourceMappingURL=seedBase.js.map