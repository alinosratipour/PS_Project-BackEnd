import { Context } from "../helpers/prismaContext";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const getAllPizzasListResolver = async (
  _parent: unknown,
  _args: unknown,
  _context: Context, // Use the Context type
  _info: unknown
) => {
  try {
    const pizzas = await _context.prisma.pizza.findMany();
    return pizzas;
  } catch (error) {
    console.error("Error fetching pizza data:", error);
    throw new Error("Unable to fetch pizza data");
  } finally {
    await prisma.$disconnect();
  }
};

export default getAllPizzasListResolver;
