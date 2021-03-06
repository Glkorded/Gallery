import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.css'

const Navigation = () =>
  <div>
    <nav>
      <ul className="navigation_list">
        <li className="navigation_list_element">
          <Link className="navigation_link" to="/">Home and Tags</Link>
        </li>
        <li className="navigation_list_element">
          <Link className="navigation_link" to="/gallery/">Gallery</Link>
        </li>
        <li className="navigation_list_element">
          <Link className="navigation_link" to="/todolist/">To-do List</Link>
        </li>
      </ul>
    </nav>
  </div>;

export default Navigation;