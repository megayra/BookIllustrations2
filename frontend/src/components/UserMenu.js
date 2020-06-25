import React , {Fragment, useEffect, useState} from "react";
import { useSelector, useDispatch} from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { NavLink, NavItem} from 'reactstrap';
import { logout } from '../redux/actions';
import * as actions from "../redux/actions";

const UserMenu = () => {
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, getCurrentUser] = useState();
    // const [name, setName] = useState('');
    // const [user, saveCurrentUser] = useState({});
    const dispatchLogout = () => {
        dispatch(logout({}));
        console.log('LocalStorage after logout',localStorage.getItem('token'));
        // this.setState();
        // saveCurrentUser({});
        history.push(`/`);
        window.location.reload();
        getCurrentUser();
    }
    // const dispatchCurrentUser = () => {
    //     dispatch(getCurrentUser());
    // }
    useEffect(() => {
        getCurrentUser();
        // currentUser = state.currentUser;  
      }, []);
    return <Fragment>
        <li className="nav-item">
            <a className="nav-link" onClick={dispatchLogout} href="#">Logout</a>
        </li>
        <NavItem>
            <NavLink
            tag={RRNavLink}
            exact to="/profile">
                <div className="d-flex align-items-center">
                    <i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
                    <div>{currentUser.firstName} {currentUser.lastName }</div>
                </div>
            </NavLink>
        </NavItem>
    </Fragment>
}

export default UserMenu;