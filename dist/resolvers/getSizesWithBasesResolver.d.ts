import { Context } from "../helpers/prismaContext";
declare const getSizesWithBasesResolver: (_parent: unknown, _args: unknown, _context: Context, _info: unknown) => Promise<{
    id_size: number;
    size: string;
    price: number;
    bases: {
        id_base: number;
        base: string;
        price: number;
    }[];
}[]>;
export default getSizesWithBasesResolver;
