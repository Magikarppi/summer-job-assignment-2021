import React, { FC } from 'react';
import { ProductType } from '../../types';
import Card from '../Card';

const Facemask: FC<{ facemask: ProductType }> = ({ facemask }) => {
  return (
    <Card>
      <h2>{facemask.name}</h2>
      <p id="productID">{facemask.id}</p>
      <p>Price: {facemask.price}</p>
      <span>colors: </span>
      {facemask.color.map((c) => (
        <span key={c}>{` ${c}`}</span>
      ))}
      <p>Manufacturer: {facemask.manufacturer}</p>
    </Card>
  );
};

export default Facemask;
