import { ProductChoice } from '../types';

const BASE_URL = 'http://localhost:3003/api/products/gloves';

export const fetchProducts = async (productName: ProductChoice) => {
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
