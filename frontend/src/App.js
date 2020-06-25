import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Games from './pages/Games';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import BookAPIDetails from './pages/BookAPIDetails';
import Login from './components/Login';
import Register from './components/Register';
import BookAPIList from './pages/BookAPIList';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import ProtectedPage from './pages/ProtectedPage';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));


const Layout = props => (
    <>
        <Header/>
        <div className="container-wrap">
            {props.children}
        </div>
    </>
)

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/booksapi',
        exact: true,
        main: () => <Layout>
            <BookAPIList/>
        </Layout>
    },
    {
        path: '/register',
        exact: false,
        main: () => <Layout>
            <Register/>
        </Layout>
    },
    {
        path: '/login',
        exact: false,
        main: () => <Layout>
            <Login/>
        </Layout>
    },
    // {
    //     path: '/books',
    //     exact: false,
    //     main: () => <Layout>
    //         <Books/>
    //     </Layout>
    // },
    {
        path: '/bookdetails/:id',
        exact: false,
        main: () => <Layout>
            <BookDetails/>
        </Layout>
    },
    {
        path: '/bookapidetails/:id',
        exact: false,
        main: () => <Layout>
            <BookAPIDetails/>
        </Layout>
    },
    {
        path: '/profile',
        exact: false,
        main: () => {
            return <Layout>
            <Profile/>
        </Layout>
        }
    },
    // {
    //     path: '/protected',
    //     exact: false,
    //     main: () => {
    //         return <Layout>
    //         <ProtectedPage/>
    //     </Layout>
    //     }
    // },
    {
        path: '/games',
        exact: true,
        main: () => <Layout>
            <Games/>
        </Layout>
    },
    {
        path: '/books',
        exact: true,
        main: () => <Layout>
            <Books/>
        </Layout>
    },
]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}

function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
             {/* <PrivateRoute exact path="/" component={Home} /> */}
                {getRoutes()}
            </Switch>
            {/* <Route path="/login" component={Login} /> */}
            <Redirect from="*" to="/" />
        </Router>
    </Provider>
}

export default App;
