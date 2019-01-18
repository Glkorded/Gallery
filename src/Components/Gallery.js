import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import {imagesArray} from '../Constants/ImagesArray' //mocking JSON
import './gallery.css'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {defaultGallery: ""}
  }

  render() {
    const someTags = (element) => (this.props.tagSearch === undefined) ? element === this.state.defaultGallery : element === this.props.tagSearch ; // функция для фильтра

    const editedLink = image => ({
      pathname: `/image/${image.id}`,
      title: image.title,
      tags: image.tags,
    });

    return (
      <div>
        <h1>Gallery</h1>
        <h4>You can click on every image to see it fullsize and it's tags, also you can search images by their tags</h4>
        <div className="collection_images">
          {imagesArray.map(image =>
            image.tags.some(someTags) ? // вот тут я попытался отфильтровывать галерею по выбранному тегу, но передача в метод пропса работает как-то мегахуево
              <div key={image.id}>
                <Link to={editedLink(image)}>
                  <Thumbnail
                    key={image.id}
                    imgUrl={require(`../Images/${image.id}.jpg`)}
                  />
                </Link>
              </div> : null
          )}
        </div>
      </div>
    )
  }
}

export default Gallery