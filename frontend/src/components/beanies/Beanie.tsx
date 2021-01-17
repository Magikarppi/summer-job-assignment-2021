import React, { FC } from 'react';
import { ProductType } from '../../types';
import Card from '../Card';

const Beanie: FC<{ beanie: ProductType }> = ({ beanie }) => {
  return (
    <Card>
      <h2>{beanie.name}</h2>
      <p id="productID">{beanie.id}</p>
      <p>Price: {beanie.price}</p>
      <span>colors: </span>
      {beanie.color.map((c) => (
        <span key={c}>{` ${c}`}</span>
      ))}
      <p>Manufacturer: {beanie.manufacturer}</p>
    </Card>
  );
};

export default Beanie;
