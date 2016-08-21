import React from 'react';

export default class ContentItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {}
        }
    }

    render() {
        return (
            <div>
                {this.props.item.content}
            </div>
        )
    }

}