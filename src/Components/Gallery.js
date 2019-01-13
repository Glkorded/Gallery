import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import {imagesArray} from '../Constants/ImagesArray' //mocking JSON
import './gallery.css'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {searchedTag: "test"}
  }
  render() {

    const editedLink = image => ({
      pathname: `/image/${image.id}`,
      title: image.title,
      tags: image.tags,
    });

    const someTags = (element) => element === this.state.searchedTag;

    const searchMethod = e => {
      this.setState({
      searchedTag: e.target.value
    });
  };

    return (
      <div>
        <h1>Gallery</h1>
        <input placeholder="Search for tags" onChange={searchMethod}/>
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
              </div> : <div>No such tags found</div>
          )}
        </div>
      </div>
    )
  }
}

export default Gallery