import React, { useState, useEffect, FC } from 'react';
import { ProductType } from '../../types';
import { getProducts } from '../../utils/utils';
import Facemask from './Facemask';

const Facemasks: FC = () => {
  const [facemasks, setFacemasks] = useState<ProductType[]>([]);

  useEffect(() => {
    const getFacemasks = async () => {
      try {
        const fetchedMasks = await getProducts('facemasks');
        setFacemasks(fetchedMasks);
      } catch (error) {
        console.log(error);
      }
    };
    getFacemasks();
  }, []);
  return facemasks.length > 1 ? (
    <>
      <h1>Facemasks</h1>
      <div id="grid">
        {facemasks.map((facemask: ProductType) => (
          <Facemask key={facemask.id} facemask={facemask} />
        ))}
      </div>
    </>
  ) : (
    <div>loading</div>
  );
};

export default Facemasks;
