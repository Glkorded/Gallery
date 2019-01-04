import React, { Component } from 'react';
import Thumbnail from './Thumbnail'
import Image from './Image'
import './gallery.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Gallery extends Component {
    render() {

        const imagesArray = [
            {id: 0, title: "first"},
            {id: 1, title: "second"},
            {id: 2, title: "third"},
            {id: 3, title: "fourth"}
        ];

        return (
        <Router>
        <div>
            <h1>Gallery</h1>
                <div className="collection_images">
                    {imagesArray.map(image =>
                        <div>
                            <Link to={`/gallery/${image.title}`}>
                                <Thumbnail
                                key={image.id}
                                imgUrl={require(`../Images/${image.title}.jpg`)}
                                />
                            </Link>
                        </div>
                    )}
                </div>
            <Route
                path={`/gallery/:imgUrl`}
                exact component={Image}
            />
        </div>
        </Router>
        );
    }
}

export default Gallery