import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import UserList from './pages/userList/UserList';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

export default function App() {
    return(
        <Router>
            <div>
                <Topbar />
                <div className="conatiner">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/users">
                            <UserList />
                        </Route>
                        <Route path="/user/:userId">
                            <User />
                        </Route>
                        <Route path="/newUser">
                            <NewUser />
                        </Route> 
                        <Route path="/products">
                            <ProductList />
                        </Route>
                        <Route path="/product/:productId">
                            <Product />
                        </Route>
                        <Route path="/newproduct">
                            <NewProduct />
                        </Route> 
                    </Switch>
                </div>
            </div>
        </Router>
    )
}