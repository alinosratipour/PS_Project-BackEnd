import { Context } from '../helpers/prismaContext';
declare const getBasesBySizeResolver: (_parent: unknown, args: {
    id_size: number;
}, _context: Context, _info: unknown) => Promise<{
    id_base: number;
    base: string;
    price: number;
}[] | undefined>;
export default getBasesBySizeResolver;
