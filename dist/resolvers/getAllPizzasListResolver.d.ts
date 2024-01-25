import { Context } from "../helpers/prismaContext";
declare const getAllPizzasListResolver: (_parent: unknown, _args: unknown, _context: Context, _info: unknown) => Promise<{
    id_pizza: number;
    name: string;
    top_quantity: number;
    description: string | null;
    image: string | null;
}[]>;
export default getAllPizzasListResolver;
