import { Context } from '../helpers/prismaContext';
declare const getToppingPricesForSizesResolver: (_parent: unknown, _args: unknown, _context: Context, _info: unknown) => Promise<{
    size: string;
    toppingPrices: {
        id: number;
        id_topping: number;
        id_size: number;
        price_topping: number | null;
    }[];
}[]>;
export default getToppingPricesForSizesResolver;
