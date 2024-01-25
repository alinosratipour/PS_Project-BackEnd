import { Context } from "../helpers/prismaContext";
declare const getToppingsOnPizzaResolver: (_parent: unknown, args: {
    pizzaId: number;
}, context: Context, _info: unknown) => Promise<{
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
export default getToppingsOnPizzaResolver;
