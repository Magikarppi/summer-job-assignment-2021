import React, { useState, useEffect, FC } from 'react';
import { getProducts } from '../services/products';
import { GloveType } from '../types';
import Glove from './Glove';

const Gloves: FC = () => {
  const [gloves, setGloves] = useState<GloveType[]>([]);

  useEffect(() => {
    const fetchGloves = async () => {
      try {
        const fetchedGloves = await getProducts('gloves');
        setGloves(fetchedGloves);
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    };
    fetchGloves();
  }, []);
  return gloves.length > 1 ? (
    <div>
      {gloves.map((glove: GloveType) => (
        <Glove glove={glove} />
      ))}
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Gloves;
