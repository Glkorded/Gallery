import React from 'react';
import './thumbnail.css'

const Thumbnail = ({imgUrl}) =>
<div className="thumbnail-wrapper">
    <img
        className="thumbnail"
        src = {imgUrl}
        alt = 'Thumb'
        />
</div>

export default Thumbnail;