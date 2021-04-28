import React, { useEffect } from 'react';
import '../styles/Basket.css';
import { useSelector, useDispatch} from 'react-redux';
import Sneaker from './Sneaker';
import { removeFromBasket } from '../actions/basketActions';

const Basket = () =>{
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket);

    const getBasketTotal = () => {
        return basket.reduce((acc,item) =>{
            return acc+=Number(item.retailPrice);
        },0);
    };

    return (
        <div className="basket">
            <div className="basket__total">
                <h3>Your basket total:</h3>
                <h2>${getBasketTotal()}</h2>
            </div>
            {basket.length > 0 ? <h1>Items currently in Your basket:</h1> : <h1 className="basket__empty">You have not added any items to your basket!</h1>}

            
            {basket.map(sneaker =>{
            return (<div className="basket__sneaker">
                    <Sneaker
                        key={Math.random()}
                        id={sneaker.id}
                        image={sneaker.media.thumbUrl}
                        title={sneaker.title}
                        price={sneaker.retailPrice}
                        showButton={true}
                    /> 
                    </div>);
            })}
        </div>
    );
};



export default Basket;