import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {saveCurrentUser} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, getCurrentUser] = useState();

    const dispatchLogin = () => {
        dispatch(login({
            email,
            password,
        }));
        dispatch(saveCurrentUser());
        getCurrentUser();
        console.log('Dispatch login localstor',localStorage.getItem('token'));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="login-email"/>
        </div>
        <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="login-password" />
        </div>
        <button type="button" className="btn btn-success" onClick={dispatchLogin}>Login</button>
    </form>
}

export default RegisterForm;