import React, {Component} from 'react';

class Tags extends Component {
    render() {
        return (
            <div>
                <span>{this.props.tags}</span>
            </div>
        );
    }
}

export default Tags;