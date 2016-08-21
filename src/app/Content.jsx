import React from 'react';
import ContentItem from './ContentItem.jsx';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                title: {
                    1: {
                        width: 60 + '%',
                        backgroundColor: Color.PrimaryDark.backgroundColor,
                        color: "#FFF",
                        padding: '10px 25px'
                    },
                    2: {
                        width: 60 + '%',
                        backgroundColor: Color.PrimaryAccent.backgroundColor,
                        color: "#FFF",
                        padding: '10px 25px'
                    },
                    3: {
                        width: 60 + '%',
                        backgroundColor: Color.Primary.backgroundColor,
                        color: "#FFF",
                        padding: '10px 25px'
                    },
                    4: {
                        width: 60 + '%',
                        backgroundColor: Color.Primary.backgroundColor,
                        color: "#FFF",
                        padding: '10px 25px'
                    }
                },
                icon: {
                    float: 'right'
                },
                listItem: {
                    paddingLeft: 30
                },
                itemTitle: {
                    1: {
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: Color.PrimaryDarkText.color
                    },
                    2: {
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: Color.PrimaryAccentText.color
                    },
                    3: {
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: Color.PrimaryText.color
                    },
                    4: {
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: Color.PrimaryText.color
                    }
                },
                itemSubtitle: {
                    1: {
                        marginTop: 5,
                        color: Color.PrimaryDarkText.color
                    },
                    2: {
                        marginTop: 5,
                        color: Color.PrimaryAccentText.color
                    },
                    3: {
                        marginTop: 5,
                        color: Color.PrimaryText.color
                    },
                    4: {
                        marginTop: 5,
                        color: Color.PrimaryText.color
                    }
                },
                listData: {
                    marginBottom: 20,
                    marginTop: 0,
                    paddingLeft: 15
                },
                listDataLi: {
                    paddingLeft: '1em',
                    textIndent: '-.7em',
                    display: 'inline-block',
                    1: {
                        color: Color.PrimaryDarkText.color
                    },
                    2: {
                        color: Color.PrimaryAccentText.color
                    },
                    3: {
                        color: Color.PrimaryText.color
                    },
                    4: {
                        color: Color.PrimaryText.color
                    }
                }
            }
        }
    }

    render() {
        let i = 0;
        return (
            <div>
                {
                    this.props.items.map(item => {
                        i = i + 1;
                        return (
                            <div>
                                <div style={this.state.style.title[i]}>
                                <span key={item.id}>
                                    {item.title}
                                    <i className="material-icons" style={this.state.style.icon}>
                                        {item.icon}
                                    </i>
                                </span>
                                </div>
                                <ul style={this.state.style.listItem}>
                                    {
                                        item.datas.map(data => {
                                            return (
                                                <div>
                                                    <span style={this.state.style.itemTitle[i]}>
                                                        {data.date} {data.title}
                                                    </span>
                                                    <p style={this.state.style.itemSubtitle[i]}>
                                                        {data.lieu}
                                                    </p>
                                                    <ul style={this.state.style.listData}>
                                                        {data.details.map(detail => {
                                                            return (
                                                                <div>
                                                                    <span style={this.state.style.listDataLi[i]}>■ </span>
                                                                    <li style={this.state.style.listDataLi}>
                                                                        <ContentItem item={detail}/>
                                                                    </li>
                                                                </div>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}