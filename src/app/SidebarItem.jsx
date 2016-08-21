import React from 'react';

export default class SidebarItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                lastItem: {
                    paddingBottom: 70
                }
            }
        }
    }

    render() {
        if (this.props.last == "true") {
            return (
                <div style={this.state.style.lastItem}>
                    {this.props.item.content}
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.props.item.content}
                </div>
            )
        }
    }

}