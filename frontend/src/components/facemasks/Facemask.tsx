import React, { FC, useState, useEffect } from 'react';
import { ProductType } from '../../types';
import { getAvailability } from '../../utils/utils';
import Card from '../Card';

const Facemask: FC<{ facemask: ProductType }> = ({ facemask }) => {
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    const runGetAvailability = async () => {
      try {
        const fetchedAvailability = await getAvailability(
          facemask.manufacturer
        );

        console.log('fetcheddata', fetchedAvailability);

        setAvailability(fetchedAvailability);
      } catch (error) {}
    };
    runGetAvailability();
  }, [facemask.manufacturer]);

  // const filterAv = (mask: ProductType) => {
  //   const a = availability.find(item => item.id === mask.id);
  //   set
  // }
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
