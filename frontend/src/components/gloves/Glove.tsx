import React, { FC, useContext } from 'react';
import { AvailabilityContext } from '../../context/availabilityContext';
import { ProductType } from '../../types';
import Card from '../Card';

const Glove: FC<{ glove: ProductType }> = ({ glove }) => {
  const state = useContext(AvailabilityContext);
  // const g = state.hennex;
  // console.log('g', g);
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
