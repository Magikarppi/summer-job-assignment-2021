import React, { FC } from 'react';
import { GloveType } from '../types';
import Card from './Card';

const Glove: FC<{ glove: GloveType }> = ({ glove }) => {
  return (
    <Card>
      <h2>{glove.name}</h2>
      <p id="productID">{glove.id}</p>
      <p>Price: {glove.price}</p>
      <span>colors: </span>
      {glove.color.map((c) => (
        <span key={c}>{` ${c}`}</span>
      ))}
      <p>Manufacturer: {glove.manufacturer}</p>
    </Card>
  );
};

export default Glove;
