import React, { Component } from 'react';
import './app.css'
import Footer from "./Components/Footer";
import {Route, Switch} from "react-router-dom";
import Gallery from "./Components/Gallery";
import TodoList from "./Components/TodoList";
import Image from "./Components/Image";


class App extends Component {
  render() {
    return (
      <div>
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
        <div>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
