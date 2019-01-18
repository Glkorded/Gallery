import React, {Component} from 'react';
import './image.css'
import Tags from './Tags'
import {Link} from 'react-router-dom'

class Image extends Component {

  render() {
    const {match, location} = this.props;
    return (
      <div>
        <div>
          <h2>{location.title}</h2>
          <Link to="../gallery/">Go back</Link>
          <div className="tags">
            Tags: {location.tags.map(singletag =>
            <Tags tags={singletag}/>
          )}
          </div>
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