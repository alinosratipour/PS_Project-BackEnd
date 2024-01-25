import { Context } from '../helpers/prismaContext';
declare const getToppingPricesBySizeResolver: (_parent: unknown, args: {
    id_size: number;
}, _context: Context, _info: unknown) => Promise<{
    id_size: number;
    name: string;
    price: number | null;
}[]>;
export default getToppingPricesBySizeResolver;
