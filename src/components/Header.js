import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { signOutNotification } from '../notifications';
import  { clearSneakers } from '../actions/fetchSneakers';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Header = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const basket = useSelector(state => state.basket);

    const onAuthClick = () =>{
        if(user){
            dispatch(clearSneakers());  
            auth.signOut();
            signOutNotification();
        }
        history.push('/login');
    };

    return(





        
        <div className="header">

            <div className="header__brand">
                <img className="header__logo" src="https://media.istockphoto.com/vectors/sneaker-with-wings-icon-vector-id692282902?k=6&m=692282902&s=612x612&w=0&h=6oGA-2mhkeVW3_DBMxkOAh8hN2u1kXpd7cPHbrAHbGo=" alt="sneaker logo" />
                <h1>SneakerStore</h1>
            </div>
           
            <div className="header__nav">
                
                {user ? (<div className="header__username">
                    <h3>Hello,</h3>
                    <p>{user.user.email}</p>
                </div>) : ''}
                
                <div onClick={onAuthClick} className="header__link">
                    <PersonOutlineIcon />
                    <h3>{user ? 'Sign Out' : 'Sign In'}</h3>
                   
                </div>
                
                <div className="header__link">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <HomeOutlinedIcon />
                    </Link> 
                    <h3>Home</h3>
                </div>
        
                <div className="header__link">
                    <Link to="/basket" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <ShoppingCartOutlinedIcon />
                    </Link>   
                    <h3>Basket ({basket.length})</h3>
                
                </div>
                <div className="header__link">
                    <ContactSupportOutlinedIcon />
                    <h3>Contacts</h3>
                </div>
            </div>
        </div>
        


    );
};

export default Header;