import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../../assets/img/blogo1.png';
import Register from '../Register';
import Login from '../Login';
import UserMenu from '../UserMenu';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            // getCurrentUser: this.props.getCurrentUser()
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount = () => {
        this.props.getCurrentUser();
        // this.setState({
        //     getCurrentUser: this.props.getCurrentUser()
        // })
    }

    render() {
        return <Navbar dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                    <img className="logo  mr-3" src={logo}/>
                    <span className="project-name">Book Illustrations</span>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Home
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/register"
                            activeClassName="active">
                            Register
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/login"
                            activeClassName="active">
                            Login
                        </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/books"
                            activeClassName="active">
                            Books
                        </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/games"
                            activeClassName="active">
                            Games
                        </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/books"
                            activeClassName="active">
                            Books
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/favorite"
                            activeClassName="active">
                            Favorite Movies
                        </NavLink>
                    </NavItem>*/}
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/booksapi"
                            activeClassName="active">
                            Books API
                        </NavLink>
                    </NavItem> 
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/protected"
                            activeClassName="active">
                            Protected
                        </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/popularmovies"
                            activeClassName="active">
                            Popular Movies
                        </NavLink>
                    </NavItem>  */}
                    {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact 
                            to="/gallery"
                            activeClassName="active">
                            Gallery
                        </NavLink>
                    </NavItem> */}
                    {this.props.token ? (
                            <UserMenu/>
                    ) : (
                        <>
                            <Register buttonLabel="Register"/>
                            <Login buttonLabel="Login"/>
                        </>
                    )}
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        currentUser: state.currentUser
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getCurrentUser: actions.getCurrentUser,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Header);