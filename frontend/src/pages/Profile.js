import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {editUser} from '../redux/actions';
import userImg from '../assets/img/penka.jpg';
import anonymousImg from '../assets/img/anonymous.gif';


const RegisterForm = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUser);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const dispatchEditUser = () => {
        dispatch(editUser({
            _id: currentUser._id,
            firstName,
            lastName,
            password,
        }));
    }

    useEffect(() => {
        if(Object.keys(currentUser).length){
            setFirstName(currentUser.firstName);
            setLastName(currentUser.lastName);
        }
    }, [currentUser]);

    return  <div className="profileWrapper my-5"><div className="profile-card">
                <div className="content">
                    <div className="img-wrapper">
                        <img className="user-img" src={anonymousImg} alt="img"/>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="first-name">First name</label>
                            <input type="text"
                                className="form-control"
                                value={firstName} 
                                onChange={e => setFirstName(e.target.value)}
                                id="first-name" 
                                placeholder="Enter name"/>
                        </div>
                            <div className="form-group">
                            <label htmlFor="last-name">Last name</label>
                            <input 
                                type="text"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                className="form-control" 
                                id="last-name" 
                                placeholder="Enter last name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="register-password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                onChange={e => setPassword(e.target.value)}
                                id="register-password" 
                                placeholder="Enter password"/>
                        </div>
                        {/* <button type="button" className="btn btn-success" onClick={dispatchEditUser}>Запази</button> */}
                        <div className="logout-wrapper">
                            <a onClick={dispatchEditUser} href="#">Update</a>
                        </div>
                    </form>        
                </div>
            </div>
        </div>
}

export default RegisterForm;