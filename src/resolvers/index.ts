import pizzaResolver from './pizzaResolver';
import sizeResolver from './sizeResolver';
import baseResolver from './baseResolver'
import sizesWithBases from './sizesWithBases'
import PizzaAndSize from './PizzaAndSize'
import pizzWithToppting from './pizzaWithToppings'


const resolvers = {
  Query: {
    ...pizzaResolver.Query,
   // ...sizeResolver.Query,
    //...baseResolver.Query,
    ...sizesWithBases.Query,
    ...PizzaAndSize.Query,
    ...pizzWithToppting.Query
    
    // Add more Query resolvers as needed
  },

};

export default resolvers;
