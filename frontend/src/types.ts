export type ProductChoice = 'gloves' | 'facemasks' | 'beanies';
export interface ProductType {
  id: string;
  type: string;
  name: string;
  color: Array<string>;
  price: number;
  manufacturer: string;
}

export interface ManufacturerType {
  id: string;
  DATAPAYLOAD: string;
}
