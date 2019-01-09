import React from 'react';
import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail'
import {imagesArray} from '../Constants/ImagesArray' //mocking JSON
import './gallery.css'

const editedLink = image => ({
  pathname: `/image/${image.id}`,
  title: image.title,
  tags: image.tags,
})

const Gallery = () =>
  <div>
    <h1>Gallery</h1>
    <div className="collection_images">
      {imagesArray.map(image =>
        <div key = {image.id}>
          <Link to={editedLink(image)}>
            <Thumbnail
              key={image.id}
              imgUrl={require(`../Images/${image.id}.jpg`)}
            />
          </Link>
        </div>
      )}
    </div>
  </div>;

export default Gallery