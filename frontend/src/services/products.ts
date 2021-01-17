import { Product } from '../types';

const BASE_URL = 'http://localhost:3003/api/products/gloves';

export const getProducts = async (productName: Product) => {
  try {
    // const response = await fetch(BASE_URL);
    const response = await fetch(`/api/products/${productName}`);
    console.log('response in getprouducst', response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
