import React, { useState, useEffect, FC } from 'react';
import { ProductType } from '../../types';
import { getProducts } from '../../utils/utils';
import Glove from './Glove';

const Gloves: FC = () => {
  const [gloves, setGloves] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchGloves = async () => {
      try {
        const fetchedGloves = await getProducts('gloves');
        setGloves(fetchedGloves);
      } catch (error) {
        console.log(error);
      }
    };
    // const fetchGloves = async () => {
    //   try {
    //     const fetchedGloves = await getProducts('gloves');
    //     const sortedGloves = fetchedGloves.sort(
    //       (a: ProductType, b: ProductType) => {
    //         if (a.name < b.name) {
    //           return -1;
    //         }
    //         if (a.name > b.name) {
    //           return +1;
    //         }
    //         return 0;
    //       }
    //     );
    //     setGloves(sortedGloves);
    //     return;
    //   } catch (error) {
    //     console.log(error);
    //     return;
    //   }
    fetchGloves();
  }, []);
  return gloves.length > 1 ? (
    <>
      <h1>Gloves</h1>
      <div id="grid">
        {gloves.map((glove: ProductType) => (
          <Glove key={glove.id} glove={glove} />
        ))}
      </div>
    </>
  ) : (
    <div>loading</div>
  );
};

export default Gloves;
