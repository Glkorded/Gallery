import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Footer from "./Components/Footer";
import TodoList from "./Components/TodoList";
import TagSearchPage from "./Components/TagSearchPage";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Image from "./Components/Image";
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
         <Route
          path="/"
          exact component={Home}
          />
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
          <Route
            path="/tags/:tagUrl"
            exact component={TagSearchPage}
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
