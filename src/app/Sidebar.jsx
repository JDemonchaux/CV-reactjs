import React from 'react';
import SidebarItem from './SidebarItem.jsx'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                sideBar: {
                    backgroundColor: Color.Primary.backgroundColor,
                    color: "#FFF",
                    marginTop: "-90px",
                    boxShadow: "rgba(0, 0, 0, 0.156863) 0px -1px 0px 0px"
                },
                title: {
                    width: 100 + '%',
                    color: Color.PrimaryAccentText.color,
                    backgroundColor: "#FFF",
                    display: 'inline-block',
                    lineHeight: 3,
                    verticalAlign: 'middle',
                    textAlign: 'center',
                    marginBottom: 20,
                    borderRight: '1px solid #EEE'
                },
                lastItem: {
                    marginBottom: 20
                }
            }
        }
    }


    render() {
        return (
            <div style={this.state.style.sideBar}>
                {
                    this.props.items.map(item => {
                        let i = 1;
                        return (
                            <div>
                                <span style={this.state.style.title}>
                                    {item.title}
                                    <i className="material-icons">
                                        {item.icon}
                                    </i>
                                </span>
                                {
                                    item.datas.map(data => {
                                        if (item.datas.length != i) {
                                            i = i+1;
                                            return (
                                                <SidebarItem item={data} last="false"/>
                                            )
                                        } else {
                                            return (
                                                <SidebarItem item={data} last="true"/>
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}