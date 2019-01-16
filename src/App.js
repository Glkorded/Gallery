import React, { Component } from 'react';
import './app.css'
import Footer from "./Components/Footer";
import {Route, Switch} from "react-router-dom";
import Gallery from "./Components/Gallery";
import TodoList from "./Components/TodoList";
import Image from "./Components/Image";
import TagSearchPage from "./Components/TagSearchPage";


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
          <Route
            path="/tags/"
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
