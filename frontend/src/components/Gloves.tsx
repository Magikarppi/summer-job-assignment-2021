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
        const sortedGloves = fetchedGloves.sort(
          (a: GloveType, b: GloveType) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return +1;
            }
            return 0;
          }
        );
        setGloves(sortedGloves);
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    };
    fetchGloves();
  }, []);
  return gloves.length > 1 ? (
    <>
      <h1>Gloves</h1>
      <div id="grid">
        {gloves.map((glove: GloveType) => (
          <Glove key={glove.id} glove={glove} />
        ))}
      </div>
    </>
  ) : (
    <div>loading</div>
  );
};

export default Gloves;
