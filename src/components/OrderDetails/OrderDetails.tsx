import React, { ReactNode, useState } from 'react';
import { ProductType } from '../../types';
import './OrderDetails.css';
interface Props {
    selected: ProductType[];
    deleteProduct: (product: ProductType) => void;
    price: number;
}
const OrderDetails: React.FC<Props> = ({ selected, deleteProduct , price}) => {
    if (selected.length === 0) {
        return (
            <div className='OrderDetails'>
                <p className='Message'>Order is empty!</p>
            </div>
        )
    }
    return (
        <div className='OrderDetails'>
            {selected.map(product => (
                <div>
                    <span>{product.product}</span>
                    <span>{product.quantity}</span>
                    <span>{product.price}</span>
                    <button onClick={() => deleteProduct(product)}>delete</button>
                </div>
            ))}
            <div>{price}</div>
        </div>
    );
};

export default OrderDetails;