import React from 'react';
import {render} from 'react-dom';
import Topbar from './Topbar.jsx';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import Login from './Login.jsx';
var CryptoJS = require("crypto-js");

const WS_URL = "http://localhost:1234/";

function fetchCV(dataType) {
    return fetch(WS_URL + dataType).then(function (response) {
        return response.json()
    }).then(function (json) {
        return json;
    }).catch(function (ex) {
        console.log('parsing failed', ex)
    });
}

class Cv extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                CV: {
                    backgroundColor: "#FFF",
                    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)",
                    paddingLeft: 0,
                    paddingRight: 0
                },
                content: {
                    paddingLeft: 0,
                    paddingRight: 0,
                },
                sideBarFiller: {
                    position: 'absolute',
                    width: 'calc(66% * 0.25 + 2px)',
                    backgroundColor: Color.Primary.backgroundColor,
                    height: 1000,
                    top: 933,
                    left: 'calc(100% / 6)'
                }
            },
            header: {},
            sideBarItems: [],
            contentItems: []
        }
    }

    componentWillMount() {
        fetchCV("header").then(data => {
            this.setState({header: data[0].header});
        });

        fetchCV("sideBar").then(data => {
            this.setState({sideBarItems: data[0].items});
        });

        fetchCV("content").then(data => {
            this.setState({contentItems: data[0].items})
        });

        // Calc sideBar height to match content's height
        //let h = document.getElementById("Content").clientHeight;
        this.setState({
            sideBar: {
                height: 100 + '%',
                paddingLeft: 0,
                paddingRight: 0
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col s2 hide-on-med-and-down">
                    &nbsp;
                </div>
                <div className="col M12 l8" style={this.state.style.CV}>
                    <Topbar header={this.state.header}/>
                    <div className="row">
                        <div className="col s3" style={this.state.style.content}>
                            <Sidebar items={this.state.sideBarItems}/>
                        </div>
                        <div className="col s9" style={this.state.style.content} id="Content">
                            <Content items={this.state.contentItems}/>
                        </div>
                    </div>
                </div>
                <div className="col s2 hide-on-med-and-down">
                    <Login />
                </div>
                <div style={this.state.style.sideBarFiller}>
                    &nbsp;
                </div>
            </div>


        );
    }
}

render(<Cv/>, document.getElementById('app'));