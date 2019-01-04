import React, {Component} from 'react';
import './thumbnail.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Thumbnail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thumbed: true,
        }
    }



    render() {
        return (
            <div>
                <div className="thumbnail-wrapper">
                {this.state.thumbed
                    ? <img onClick={this.expandMethod} className="thumbnail" src = {this.props.imgUrl} alt = 'Thumb' />
                    : <img onClick={this.expandMethod} src = {this.props.imgUrl} alt = 'ExpandedThumb'/>}
                </div>
            </div>
        );
    }
}

export default Thumbnail;