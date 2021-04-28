import React, { useState } from 'react';
import '../styles/Banner.css';
import Sneakers from './Sneakers';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSneakers } from '../actions/fetchSneakers';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Banner = () => {
    const [input, setInput] = useState('');
    const sneakers = useSelector(state => state.sneakers);
    const dispatch = useDispatch();

    /*
    useEffect(() =>{
        dispatch(fetchSneakers('jordan 1'));
    });
*/
    const onSearchSubmit = (e) =>{
        e.preventDefault();
        dispatch(fetchSneakers(input));
        setInput('');
    };

    return (
        <div className="container">
            <div className="banner">
                <div className="banner__container">
                    <h1>Buy Authentic Sneakers </h1>
                    <form className="banner__form">
                        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search for sneakers..." value={input}/>
                        <button onClick={onSearchSubmit} >SEARCH</button>
                    </form>                
                </div>        
            </div> 

            <div className="banner__labels">
                <div className="banner__label">
                    <h3>100% Authentic Sneakers</h3>
                    <CheckCircleOutlineIcon />
                </div>
                <div className="banner__label">
                    <h3>Worldwide Shipping</h3>
                    <CheckCircleOutlineIcon />
                </div>
                <div className="banner__label">
                    <h3>Money-back guarantee</h3>
                    <CheckCircleOutlineIcon />
                </div>
            </div>

            <Sneakers/>
            
        </div>
    );
};

export default Banner;

