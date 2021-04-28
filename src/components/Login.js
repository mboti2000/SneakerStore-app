import React, { useState } from 'react';
import '../styles/Login.css';
import { auth } from '../firebase';
import { signInNotification, registerNotification } from '../notifications';
import { useHistory } from 'react-router-dom'; ;


const Login = () =>{
    const history = useHistory();
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => history.push('/'))
        .catch(err => alert(err));
        signInNotification();
    };

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth =>  history.push('/'))
        .catch(err => alert(err));
        registerNotification();
    };

    return(
        <div className="login">
            <h1>SIGN IN TO YOUR ACCOUNT</h1>
            <form className="login__form">
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail..." value={email}/>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..." value={password} />
                <button className="login__button" onClick={login} type="submit">LOGIN</button>
                <h2>New customer?</h2>
                <h3>Create Your account <span>NOW</span></h3>
                <button className="login__buttonReg" onClick={register} type="submit">REGISTER</button>
            </form>
        </div>
    );
};

export default Login;