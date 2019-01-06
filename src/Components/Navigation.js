import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import TodoList from './TodoList'
import Gallery from "./Gallery";
import Image from './Image'
import './navigation.css'

const Navigation = () =>
            <Router>
                <div>
                    <nav>
                        <ul className="navigation_list">
                            <li className="navigation_list_element">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="navigation_list_element">
                                <Link to="/gallery/">Gallery</Link>
                            </li>
                            <li className="navigation_list_element">
                                <Link to="/todolist/">To-do List</Link>
                            </li>
                            <li className="navigation_list_element">
                                <Link to="/image/first">1</Link>
                            </li>
                            <li className="navigation_list_element">
                                <Link to="/image/second">2</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                <Route
                    path = "/image/:imgUrl"
                    component = {Image}
                />
                <Route
                    path="/gallery/"
                    exact component={Gallery}
                />
                <Route
                    path="/todolist/"
                    exact component={TodoList}
                />
                    </Switch>
                </div>
            </Router>

export default Navigation;