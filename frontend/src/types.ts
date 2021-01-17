export type Product = 'gloves' | 'facemasks' | 'beanies';

export interface GloveType {
  id: string;
  type: string;
  name: string;
  color: Array<string>;
  price: number;
  manufacturer: string;
}
