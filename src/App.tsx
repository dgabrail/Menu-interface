import React, { useState } from 'react';
import './App.css';
import AddItems from "./components/AddItems/AddItems";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import { ProductType } from './types';

function App() {
    const [price, setPrice] = useState(0);
    const [selected, setSelected] = useState<ProductType[]>([]);

    const newProduct = (product: ProductType) => {
        const index = selected.findIndex(el => el.product === product.product);
        if (index === -1) {
            setSelected(prev => [...prev, product]);
            setPrice(prev => prev = prev + product.price)
        } else {
            setPrice(prev => prev = prev + product.price)
            setSelected(prev => {
                const newPrev = [...prev];
                newPrev[index].quantity++;
                newPrev[index].price = product.price * newPrev[index].quantity
                return newPrev;
            })
        }
    }

    const deleteProduct = (product: ProductType) => {
        setPrice(prev => prev - selected[selected.indexOf(product)].price)
        setSelected(prev => {
            const newPrev = [...prev];
            newPrev.splice(newPrev.indexOf(product), 1);
            return newPrev;
        })
    }

    return (
        <div className="App">
            <OrderDetails price={price} deleteProduct={deleteProduct} selected={selected} />
            <AddItems newProduct={newProduct} />
        </div>
    );
}

export default App;
