"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllPizzasListResolver_1 = __importDefault(require("./getAllPizzasListResolver"));
//import getpizzaWithRelatedToppings from "./getpizzaWithRelatedToppingsResolver";
const getpizzaWithRelatedToppingsResolver_1 = __importDefault(require("./getpizzaWithRelatedToppingsResolver"));
//import getToppingPricesForSizesResolver from "./ getToppingPricesForSizesResolver ";
const getpizzasWithSizesAndPricesResolver_1 = __importDefault(require("./getpizzasWithSizesAndPricesResolver"));
const getSizesWithBasesResolver_1 = __importDefault(require("./getSizesWithBasesResolver"));
const getToppingPricesBySizeResolver_1 = __importDefault(require("./getToppingPricesBySizeResolver"));
const getBasesBySizeResolver_1 = __importDefault(require("./getBasesBySizeResolver"));
const getToppingsOnPizzaResolver_1 = __importDefault(require("./getToppingsOnPizzaResolver"));
const resolvers = {
    Query: {
        getAllPizzasList: getAllPizzasListResolver_1.default,
        getpizzaWithRelatedToppings: getpizzaWithRelatedToppingsResolver_1.default,
        // getToppingPricesForSizes: getToppingPricesForSizesResolver, 
        getpizzasWithSizesAndPrices: getpizzasWithSizesAndPricesResolver_1.default,
        getSizesWithBases: getSizesWithBasesResolver_1.default,
        getToppingPricesBySize: getToppingPricesBySizeResolver_1.default,
        getBasesPricesBySize: getBasesBySizeResolver_1.default,
        getToppingsOnPizza: getToppingsOnPizzaResolver_1.default
    },
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map