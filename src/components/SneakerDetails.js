import React from 'react';
import '../styles/SneakerDetails.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket } from '../actions/basketActions';

const SneakerDetails = (props) =>{
    const sneakers = useSelector(state => state.sneakers);
    const dispatch = useDispatch();
    const { id } = useParams();
    const sneaker = sneakers.find(sneaker => sneaker.id === id);

    console.log(sneaker);

    const addSneakerToBasket = (e) =>{
        e.preventDefault();
        dispatch(addToBasket(sneaker));
    };

    return (
        <div className="sneakerDetails">
            <div className="sneakerDetails__container">
                <div className="sneakerDetails__left">
                    <img src={sneaker.media.smallImageUrl} alt="" /> 
                </div>

                <div className="sneakerDetails__right">
                    <h3>{sneaker.brand}</h3>
                    <h1>{sneaker.shoe}</h1>
                    
                    <h3>{sneaker.colorway}</h3>   
                    <h2>${sneaker.retailPrice}</h2> 
                    <p>{sneaker.gender}</p>


                    <form className="sneakerDetails__form">
                        <select className="sneakerDetails__select">
                            <option>Select a size</option>
                            <option>EU 40</option>
                            <option>EU 41</option>
                            <option>EU 42</option>
                            <option>EU 43</option>
                            <option>EU 44</option>
                        </select>
                        <button onClick={addSneakerToBasket}>Purchase</button>
                    </form>
                </div>  
            </div>
        </div>
    );
};

export default SneakerDetails;

//colorway, gender, retailPrice, brand, media.imageUrl, shoe