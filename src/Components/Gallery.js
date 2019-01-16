import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import {imagesArray} from '../Constants/ImagesArray' //mocking JSON
import './gallery.css'
import Tags from "./Tags";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {searchedTag: ""}
  }
  render() {

    const editedLink = image => ({
      pathname: `/image/${image.id}`,
      title: image.title,
      tags: image.tags,
    });

    const someTags = (element) => element === this.state.searchedTag.toLowerCase();

    const searchMethod = e => {
      if (e.key == "Enter") {
      this.setState({
      searchedTag: e.target.value
    })};
  };

    return (
      <div>
        <h1>Gallery</h1>
        <h4>You can click on every image to see it fullsize and it's tags, also you can search images by their tags</h4>
        <input placeholder="Search for tags" onKeyPress={searchMethod}/>
        <div className="collection_images">
          {imagesArray.map(image =>
            image.tags.some(someTags) ?
              <div key={image.id}>
                <Link to={editedLink(image)}>
                  <Thumbnail
                    key={image.id}
                    imgUrl={require(`../Images/${image.id}.jpg`)}
                  />
                </Link>
              </div> : <div key = {image.id} className={"hidden"}></div>
          )}
        </div>
      </div>
    )
  }
}

export default Gallery