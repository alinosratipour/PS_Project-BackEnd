import { Context } from '../helpers/prismaContext';
declare const getpizzaWithRelatedToppingsResolver: (_parent: unknown, _args: unknown, _context: Context, _info: unknown) => Promise<{
    id_pizza: number;
    name: string;
    top_quantity: number;
    description: string | null;
    image: string | null;
    toppingsOnPizza: {
        id: number;
        id_pizza: number;
        idf_topping: number;
        toppings: {
            id: number;
            name: string;
        } | null;
    }[];
}[]>;
export default getpizzaWithRelatedToppingsResolver;
