import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TodoList from './TodoList'
import Gallery from "./Gallery";
import './navigation.css'

class Navigation extends Component {
    render() {
        return (
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
                        </ul>
                    </nav>

                <Route path="/gallery/" exact component={Gallery}/>
                <Route path="/todolist/" exact component={TodoList}/>
                </div>
            </Router>
        );
    }
}


export default Navigation;