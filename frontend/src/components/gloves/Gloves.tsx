import React, { useState, useEffect, FC, useContext } from 'react';
import { AvailabilityContext } from '../../context/availabilityContext';
import { ProductType } from '../../types';
import { getAvailability, getProducts } from '../../utils/utils';
import Glove from './Glove';

const Gloves: FC = () => {
  const [gloves, setGloves] = useState<ProductType[]>([]);
  // const [manufacturers, setManufacturers] = useState([]);

  // const state = useContext(AvailabilityContext);

  // useEffect(() => {
  //   const getGloves = async () => {
  //     try {
  //       const fetchedGloves = await getProducts('gloves');
  //       setGloves(fetchedGloves);
  //     } catch (error) {
  //       console.log(error);
  //       //check if error gets up here from getprods
  //     }
  //   };
  //   // const getGloves = async () => {
  //   //   try {
  //   //     const fetchedGloves = await getProducts('gloves');
  //   //     const sortedGloves = fetchedGloves.sort(
  //   //       (a: ProductType, b: ProductType) => {
  //   //         if (a.name < b.name) {
  //   //           return -1;
  //   //         }
  //   //         if (a.name > b.name) {
  //   //           return +1;
  //   //         }
  //   //         return 0;
  //   //       }
  //   //     );
  //   //     setGloves(sortedGloves);
  //   //     return;
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //     return;
  //   //   }
  //   getGloves();
  // }, []);

  // useEffect(() => {
  //   const getManus = async () => {
  //     try {
  //       const onlyUnique = (value: any, index: any, self: any) => {
  //         return self.indexOf(value) === index;
  //       };

  //       const manus = gloves.filter(onlyUnique);

  //       const x = async (manu: any) => {
  //         const ava = await getAvailability(manu);
  //         state.setAvailabilities(ava);
  //       };

  //       manus.map((manu) => {
  //         x(manu);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       //check if error gets up here from getprods
  //     }
  //   };
  //   if (gloves) {
  //     getManus();
  //     return;
  //   }
  //   return;
  // }, [gloves]);

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
