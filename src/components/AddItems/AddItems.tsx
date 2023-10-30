import React from 'react';
import './Additems.css';
import Hamburger from '../../assets/Hamburger.jpeg'
import Cheeseburger from '../../assets/Cheeseburger.jpeg'
import Free from '../../assets/Free.jpeg'
import Tea from '../../assets/Tea.jpeg'
import Cola from '../../assets/Cola.jpeg'
import Coffee from '../../assets/Cofee.jpeg'
import Product from '../Product/Product';
import { ProductType } from '../../types';
interface Props {
    newProduct: (product: ProductType) => void
}
const AddItems: React.FC<Props> = ({newProduct }) => {
    const products: ProductType[] = [
        { image: Hamburger, price: 80, product: 'Hamburger', quantity: 1 },
        { image: Free, price: 60, product: 'Free', quantity: 1 },
        { image: Cheeseburger, price: 90, product: 'Cheeseburger', quantity: 1 },
        { image: Tea, price: 10, product: 'Tea', quantity: 1 },
        { image: Cola, price: 50, product: 'Cola', quantity: 1 },
        { image: Coffee, price: 20, product: 'Coffee', quantity: 1 },
    ];

    return (
        <div className='AddItems'>
            {products.map((product, index) => (
                <Product newProduct={newProduct} key={JSON.stringify(index)} product={product} />
            ))}
        </div>
    );
};

export default AddItems;