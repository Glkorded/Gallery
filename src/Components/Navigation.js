import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import TodoList from './TodoList'
import Gallery from "./Gallery";
import Image from './Image'
import './navigation.css'

const Navigation = () =>
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
                        </ul>
                    </nav>
                    <Switch>
                <Route
                    path="/gallery/"
                    exact component={Gallery}
                />
                <Route
                    path="/todolist/"
                    exact component={TodoList}
                />
                <Route
                    path="/image/:imgUrl"
                    exact component={Image}
                />
                    </Switch>
                </div>;

export default Navigation;