import React from 'react';
import './image.css'

const Image = ({match}) =>
            <div>
                <img className="fullsize_picture"
                    src = {require(`../Images/${match.params.imgUrl}.jpg`)}
                    alt = 'Fullsize'
                />
            </div>

export default Image;