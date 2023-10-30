import React from 'react';
import './Product.css';
import { ProductType } from '../../types';
interface Props {
  product: ProductType;
  newProduct: (product: ProductType) => void
}

const Product: React.FC<Props> = ({ product, newProduct }) => {

  return (
    <div onClick={() => newProduct(product)} className='Product'>
      <img src={product.image} alt="" />
      <div>{product.product}</div>
      <span>{product.price}</span>
    </div>
  )
}

export default Product
