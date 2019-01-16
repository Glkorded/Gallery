import React, {Component} from 'react'
import Gallery from "./Gallery";

class TagSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {searchedTag: " "}
  }

  render() {

    const searchMethod = e => {
      if (e.key === "Enter") {
        this.setState({
          searchedTag: e.target.value
        })};
    };

    return (
      <div>
        <Gallery
          tagSearch={this.state.searchedTag}
        />
        <input placeholder="Search for tags" onKeyPress={searchMethod}/>
      </div>
  )
  }
}

export default TagSearchPage