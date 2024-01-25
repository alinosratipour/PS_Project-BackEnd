import { Context } from '../helpers/prismaContext';
declare const getpizzasWithSizesAndPricesResolver: (_parent: unknown, _args: unknown, _context: Context, _info: unknown) => Promise<{
    id_pizza: number;
    name: string;
    top_quantity: number;
    description: string | null;
    image: string | null;
    sizesWithPrices: {
        id_size: number;
        p_size: string;
        price_topping: number;
        price: number;
    }[];
}[]>;
export default getpizzasWithSizesAndPricesResolver;
