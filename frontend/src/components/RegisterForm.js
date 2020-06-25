import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('author');

    const dispatchAddUser = () => {
        dispatch(addUser({
            firstName,
            lastName,
            email,
            // userType: 'regular',
            userType,
            password,
        }));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="first-name">Name</label>
            <input type="text"
                className="form-control"
                onChange={e => setFirstName(e.target.value)}
                id="first-name" />
        </div>
        <div className="form-group">
            <label htmlFor="last-name">Last name</label>
            <input 
                type="text"
                onChange={e => setLastName(e.target.value)}
                className="form-control" 
                id="last-name" />
        </div>
        <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="register-email"/>
        </div>
        <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="register-password" />
        </div>
        <div className="form-group">
            <label htmlFor="register-usertype">User type</label>
            <select className="form-control" onChange={e => setUserType(e.target.value)} id="register-usertype">
                <option value="author">Author</option>
                <option value="illustrator">Illustrator</option>
            </select>
        </div>
        <button type="button" className="btn btn-success" onClick={dispatchAddUser}>Register</button>
    </form>
}

export default RegisterForm;