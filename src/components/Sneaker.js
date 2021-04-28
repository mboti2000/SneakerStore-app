import React from 'react';
import '../styles/Sneaker.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { removeFromBasket } from '../actions/basketActions';

const Sneaker = ({id, title, image, price, showButton}) =>{
   const history = useHistory();
   const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

    return (
        //<Link to={`/sneakers/${id}`}>
            <div  className="sneaker">
                
                <img onClick={() => history.push(`/sneakers/${id}`)} src={image} alt={title}/>
                <h2>{title}</h2>
                <p>${price}</p>
                {showButton ? <button className="sneaker__delete" onClick={(e) => dispatch(removeFromBasket(id))}>Remove</button> : ''}

            </div>
        //</Link> 
    );

   
};
//



export default Sneaker;