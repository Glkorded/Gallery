import React from 'react';
import './image.css'
import Tags from './Tags'
import imagesArray from './ImagesArray'

const Image = ({match}) =>
    <div>
            <div>
                <h2>{match.params.imgUrl}</h2>
                <img className="fullsize_picture"
                    src = {require(`../Images/${match.params.imgUrl}.jpg`)}
                    alt = 'Fullsize'
                />

                <Tags
                tags = 'hui'
                />
            </div>
        <Tags/>
    </div>;

export default Image;