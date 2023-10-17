import { Context } from "../helpers/prismaContext";

const getAllPizzasListResolver = async (
  _parent: unknown,
  _args: unknown,
  _context: Context, // Use the Context type
  _info: unknown
) => {
  const pizzas = await _context.prisma.pizza.findMany();
  return pizzas;
};

export default getAllPizzasListResolver;
