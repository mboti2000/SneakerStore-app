import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Login from './components/Login';
import Basket from './components/Basket';
import SneakerDetails from './components/SneakerDetails';
import { auth } from './firebase';
import { signIn, signOut } from './actions/userActions';
import { useDispatch } from 'react-redux';
import  { clearSneakers } from './actions/fetchSneakers';
import { clearBasket } from './actions/basketActions';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{

    auth.onAuthStateChanged(authUser => {
      if(authUser){

       dispatch(signIn({ id: authUser.uid, email: authUser.email}));
       console.log(authUser);

      } else{
        dispatch(signOut());
        dispatch(clearSneakers());
        dispatch(clearBasket());
      }
    });

  },[dispatch]);

  return (
   <div className="app">
     <ReactNotification />
     
     <Router>

       <Route exact path="/">
       <Header />
          <Banner/>
       </Route>

       <Route path="/sneakers/:id">
       <Header />
          <SneakerDetails />
       </Route>

       <Route path="/login">
        <Header />
         <Login />
       </Route>

       <Route path="/basket">
        <Header />
         <Basket />
       </Route>

     </Router>
     <Footer />
     

   </div>
      
    
  );
}

export default App;
