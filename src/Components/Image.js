import React from 'react';

const Image = ({match}) =>
            <div>
                <img
                    src = {require(`../Images/${match.params.imgUrl}.jpg`)}
                    alt = 'Fullsize'
                />
            </div>

export default Image;