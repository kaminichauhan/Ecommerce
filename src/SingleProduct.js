import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const  { id } = useParams();
  return (
    <div>
      singleProduct
    </div>
  )
};

export default SingleProduct;
