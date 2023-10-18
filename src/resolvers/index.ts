import getAllPizzasListResolver from "./getAllPizzasListResolver";
//import getpizzaWithRelatedToppings from "./getpizzaWithRelatedToppingsResolver";
import getpizzaWithRelatedToppingsResolver from "./getpizzaWithRelatedToppingsResolver";
import getToppingPricesForSizesResolver from "./ getToppingPricesForSizesResolver ";
import getpizzasWithSizesAndPricesResolver from "./getpizzasWithSizesAndPricesResolver";
import getSizesWithBasesResolver from "./getSizesWithBasesResolver"
import getToppingPricesBySizeResolver  from "./getToppingPricesBySizeResolver"

const resolvers = {
  Query: {
    getAllPizzasList:getAllPizzasListResolver,
    getpizzaWithRelatedToppings:getpizzaWithRelatedToppingsResolver,
   // getToppingPricesForSizes: getToppingPricesForSizesResolver, 
    getpizzasWithSizesAndPrices: getpizzasWithSizesAndPricesResolver,
    getSizesWithBases:getSizesWithBasesResolver,
    getToppingPricesBySize:getToppingPricesBySizeResolver 

  },
};

export default resolvers;
