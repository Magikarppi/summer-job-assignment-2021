import React, { useState, useEffect, FC } from 'react';
import { ProductType } from '../../types';
import { getProducts } from '../../utils/utils';
import Beanie from './Beanie';

const Beanies: FC = () => {
  const [beanies, setBeanies] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchGloves = async () => {
      try {
        const fetchedGloves = await getProducts('beanies');
        setBeanies(fetchedGloves);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGloves();
  }, []);
  return beanies.length > 1 ? (
    <>
      <h1>Beanies</h1>
      <div id="grid">
        {beanies.map((beanie: ProductType) => (
          <Beanie key={beanie.id} beanie={beanie} />
        ))}
      </div>
    </>
  ) : (
    <div>loading</div>
  );
};

export default Beanies;
