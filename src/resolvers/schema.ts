import { gql } from "apollo-server-express";

const typeDefs = gql`
  type ToppingPrice {
    id: Int!
    id_size: Int!
    price_topping: Float!
    size: Size
  }

  type ToppingOnPizza {
    id: Int!
    id_pizza: Int!
    toppings: Toppings
  }

  type Toppings {
    id: Int!
    name: String!
  }

  type ToppingPriceForSize {
    size: String
    toppingPrices: [ToppingPrice!]  
  }
  

  type Pizza {
    id_pizza: Int!
    name: String!
    top_quantity: Int!
    description: String
    image: String
    sizes: [Size!]!
    sizesWithPrices: [SizeWithPrice!]!
    toppingsOnPizza: [ToppingOnPizza!]!
  }

  type SizeWithPrice {
    id_size: Int!
    p_size: String!
    price_topping: Float!
    price: Float!
  }

  type Size {
    id_size: Int!
    p_size: String!
    price_topping: Float!
    bases: [String!]!
    toppings: [ToppingPrice!]
  }

  type Base {
    id_base: Int!
    name: String!
    increase_price: Int!
  }

  type SizeWithRelatedBases {
    size: String!
    bases: [BaseWithPrice!]!
  }

  type BaseWithPrice {
    base: String!
    price: Float!
  }

  type Query {
    sizes: [Size!]!
    pizzas: [Pizza!]!
    pizza(id_pizza: Int!): Pizza
    listPizzasWithToppings: [Pizza!]!
    bases: [Base!]! # Add a query to fetch all bases
    getAllSizesWithRelatedBases: [SizeWithRelatedBases!]!
    pizzasWithSizesAndPrices: [Pizza!]!
    getToppingPricesForSizes: [ToppingPriceForSize!]!
  }

  type Mutation {
    createPizza(name: String!, top_quantity: Int!, description: String): Pizza!
    createBase(name: String!, increase_price: Int!): Base! # Add a mutation to create a base
 
  }
`;

export default typeDefs;
