import pizzaResolver from "./pizzaResolver";
import sizeResolver from "./sizeResolver";
import baseResolver from "./baseResolver";
import sizesWithBases from "./sizesWithBases";
import PizzaAndSize from "./PizzaAndSize";
import pizzWithToppting from "./pizzaWithToppings";
import getToppingPricesForSizesResolver from "./ getToppingPricesForSizesResolver ";

const resolvers = {
  Query: {
    ...pizzaResolver.Query,
    ...sizesWithBases.Query,
    ...PizzaAndSize.Query,
    ...pizzWithToppting.Query,
    getToppingPricesForSizes: getToppingPricesForSizesResolver, 

    // Add more Query resolvers as needed
  },
};

export default resolvers;
