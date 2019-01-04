import React, {Component} from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <img src = {this.props.imgUrl} alt = 'ExpandedThumb'/>
            </div>
        );
    }
}

export default Image;