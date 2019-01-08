import React, {Component} from 'react';
import './image.css'
import Tags from './Tags'
import {imagesArray} from '../Constants/ImagesArray'

class Image extends Component {

  render() {
    const {match, location} = this.props
      return (
      <div>
        <div>
          <h2>{location.title}</h2>
          <img className="fullsize_picture"
               src={require(`../Images/${match.params.imgUrl}.jpg`)}
               alt='Fullsize'
          />
          <Tags tags={location.tags}/>
        </div>
      </div>
  )
  }
}

export default Image;