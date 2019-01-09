import React from 'react';
import {Link} from 'react-router-dom'

const editedLink = tag => ({
  pathname: `/tags/${tag}`,
})

const Tags = ({tags}) =>
  <div>
      <Link to={editedLink(tags)}>{tags}</Link>
    {console.log({tags})}
  </div>;

export default Tags;

