import React, {useState} from 'react';
import Hamburger from './assets/Hamburger.jpeg'
import Cheeseburger from './assets/Cheeseburger.jpeg'
import Free from './assets/Free.jpeg'
import Tea from'./assets/Tea.jpeg'
import Cola from './assets/Cola.jpeg'
import Coffee from './assets/Cofee.jpeg'
import  './App.css';
import AddItems from "./components/AddItems/AddItems";
import OrderDetails from "./components/OrderDetails/OrderDetails";

function App() {

    const MenuTwo: {name: string, prise: number}[] = [
        {name: 'llk' , prise: 78}
    ]

    const Menu = [
        {name:'Hamburger' , prise: 50 , card: Hamburger},
        {name: 'Cheeseburger' , prise: 70 , card: Cheeseburger},
        {name: 'Free' , prise: 100 , card: Free},
        {name:'Coffee' , prise: 15, card: Coffee},
        {name:'Cola' , prise: 75 , card: Cola},
        {name: 'Tea' , prise: 20, card: Tea}
    ]


    const [Dishes, setDishes] = useState([
        {name: 'Hamburger' , count: 0},
        {name: 'Cheeseburger' , count: 0},
        {name: 'Free', count: 0},
        {name: 'Coffee' , count: 0},
        {name: 'Cola', count: 0},
        {name: 'Tea' , count: 0}
    ])

    let MenuList: React.ReactNode = null;
    let DishesList: React.ReactNode = null;

    const deleteDish = (index: number) => {
        MenuTwo.splice(index , 1)
    }


    const countNumber = (name: string , prise: number) => {
        const newDishes = {name: name , prise: prise}

        setDishes(prev => prev.map(dish => {
            if(dish.count < 1){
                MenuTwo.push(newDishes)
            }
            if(dish.name === name){
                return {
                    ...dish,
                    count: dish.count + 1
                }
            }
            return  dish
        }))

        DishesList = MenuTwo.map((dish , index) => (
            Dishes.map((list , index) => (
                <div>
                    <span> {dish.name} </span>
                    <span>{Dishes[index].count} </span>
                    <span>{dish.prise} </span>
                    <button onClick={() => deleteDish(index)}>add</button>
                </div>
            ))
        ))
    }



    MenuList = Menu.map((Dish , index) => (
        <div className='Dish' key={index} onClick={() => countNumber(Dish.name , Dish.prise)}>
            <div><img src={Dish.card}/></div>
            <span>{Dish.name}</span>
            <div>Prise:{Dish.prise}</div>
        </div>
    ))

    return (
        <div className="App">
            {DishesList}
            <AddItems MenuList={MenuList}/>
        </div>
    );
}

export default App;
