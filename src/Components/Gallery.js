import React from 'react';
import Thumbnail from './Thumbnail'
import {imagesArray} from './ImagesArray' //mocking JSON
import {Link} from 'react-router-dom'
import './gallery.css'

const Gallery = () =>
      <div>
        <h1>Gallery</h1>
        <div className="collection_images">
          {imagesArray.map(image =>
            <div>
              <Link to={`/image/${image.title}`}>
                <Thumbnail
                  key={image.id}
                  imgUrl={require(`../Images/${image.title}.jpg`)}
                />
              </Link>
              {image.tags}
            </div>
          )}
        </div>
      </div>;

export default Gallery