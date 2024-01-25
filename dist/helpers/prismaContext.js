"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const context = {
    prisma,
    disconnect: () => {
        prisma.$disconnect();
    }
};
exports.default = context;
//# sourceMappingURL=prismaContext.js.map