import { fetchAvailability } from '../services/availability';
import { fetchProducts } from '../services/products';
import { ProductType, ProductChoice } from '../types';

export const getProducts = async (product: ProductChoice) => {
  try {
    const fetchedData = await fetchProducts(product);
    const sortedProducts = fetchedData.sort(
      (a: ProductType, b: ProductType) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return +1;
        }
        return 0;
      }
    );
    return sortedProducts;
  } catch (error) {
    throw Error(error);
  }
};

export const getAvailability = async (manufacturer: any) => {
  try {
    const fetchedData = await fetchAvailability(manufacturer);
    return fetchedData;
  } catch (error) {
    throw Error(error);
  }
};
