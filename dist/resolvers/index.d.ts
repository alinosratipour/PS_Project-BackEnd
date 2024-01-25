declare const resolvers: {
    Query: {
        getAllPizzasList: (_parent: unknown, _args: unknown, _context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
            id_pizza: number;
            name: string;
            top_quantity: number;
            description: string | null;
            image: string | null;
        }[]>;
        getpizzaWithRelatedToppings: (_parent: unknown, _args: unknown, _context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
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
        getpizzasWithSizesAndPrices: (_parent: unknown, _args: unknown, _context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
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
        getSizesWithBases: (_parent: unknown, _args: unknown, _context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
            id_size: number;
            size: string;
            price: number;
            bases: {
                id_base: number;
                base: string;
                price: number;
            }[];
        }[]>;
        getToppingPricesBySize: (_parent: unknown, args: {
            id_size: number;
        }, _context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
            id_size: number;
            name: string;
            price: number | null;
        }[]>;
        getBasesPricesBySize: (_parent: unknown, args: {
            id_size: number;
        }, _context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
            id_base: number;
            base: string;
            price: number;
        }[] | undefined>;
        getToppingsOnPizza: (_parent: unknown, args: {
            pizzaId: number;
        }, context: import("../helpers/prismaContext").Context, _info: unknown) => Promise<{
            id: number;
            id_pizza: number;
            toppings: {
                id: number | null;
                name: string | null;
                toppingPrice: {
                    id: number;
                    id_topping: number;
                    id_size: number;
                    price_topping: number | null;
                }[] | null;
            };
        }[]>;
    };
};
export default resolvers;
