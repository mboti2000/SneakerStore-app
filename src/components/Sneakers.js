import React from 'react';
import Sneaker from './Sneaker';
import '../styles/Sneakers.css';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';

const Sneakers = () =>{
    const sneakers = useSelector(state => state.sneakers);

    const renderSneakers = () =>{
        if(sneakers?.length !== 0){
            return (
                sneakers.map(sneaker => {
                    if(sneaker.media.thumbUrl){
                        return <Sneaker 
                                    key={sneaker.id}
                                    id={sneaker.id}
                                    image={sneaker.media.thumbUrl}
                                    title={sneaker.title}
                                    price={sneaker.retailPrice}
                                />
                    }
                })
            );
        }
    }
    
    return(
        <div className="sneakers__page">
        {sneakers?.length > 0 ? <h1 className="sneakers__text">Choose and click a sneaker to see the details!</h1> : <div className="sneakers__empty"><h1 className="sneakers__emptyText">Search for our hundreds of sneakers!</h1><SearchIcon fontSize="large"/></div>}

        <div className="sneakers">
           {sneakers ? renderSneakers() : ''}
        </div>
        </div>
    );
};



export default Sneakers;