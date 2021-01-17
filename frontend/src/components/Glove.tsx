import React, { FC } from 'react';
import { GloveType } from '../types';

const Glove: FC<{ glove: GloveType }> = ({ glove }) => {
  return (
    <div>
      <p>{glove.name}</p>
      <p>{glove.type}</p>
      <p>{glove.name}</p>
      <p>{glove.price}</p>
    </div>
  );
};

export default Glove;
