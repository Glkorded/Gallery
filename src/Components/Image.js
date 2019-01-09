import React, {Component} from 'react';
import './image.css'
import Tags from './Tags'

class Image extends Component {

  render() {
    const {match, location} = this.props;
    return (
      <div>
        <div>
          <h2>{location.title}</h2>
          <Tags tags={location.tags}/>
          <img className="fullsize_picture"
               src={require(`../Images/${match.params.imgUrl}.jpg`)}
               alt='Fullsize'
          />
        </div>
      </div>
  )
  }
}

export default Image;