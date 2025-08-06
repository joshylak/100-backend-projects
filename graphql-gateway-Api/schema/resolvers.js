import { getUsers } from '../services/userService.js';
import { getProducts } from '../services/productService.js';

export const resolvers = {
  Query: {
    users: async () => await getUsers(),
    products: async () => await getProducts(),
  },
};
