"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seedBasePrice() {
    try {
        // Define your data to seed here
        const dataToSeed = [
            { id_size: 4, id_base: 1, price_base: 4.0 },
            { id_size: 4, id_base: 2, price_base: 5.0 },
            { id_size: 4, id_base: 3, price_base: 6.0 },
            // Add more data as needed
        ];
        // Seed the data into the database
        const seededData = await prisma.basePrice.createMany({
            data: dataToSeed,
        });
        console.log('Seeded data:', seededData);
    }
    catch (error) {
        console.error('Error seeding data:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
// Call the seedBasePrice function to start seeding
seedBasePrice();
//# sourceMappingURL=seedBasePrice.js.map