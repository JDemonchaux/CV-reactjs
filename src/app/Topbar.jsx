import React from 'react';

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                topBar: {
                    paddingLeft: 10
                },
                git: {
                    width: 16,
                    height: 16,
                    cursor: 'pointer'
                },
                blocTitle: {
                    marginLeft: 24 + '%',
                    fontSize: 22,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: Color.Primary.backgroundColor,
                    boxShadow: "rgba(0, 0, 0, 0.156863) 0px -1px 0px 0px"
                },
                blocTitleSpan: {
                    textIndent: 25,
                    color: "#FFF"
                },
                titleP: {
                    fontSize: 32,
                    marginBottom: 0
                },
                subtitleP: {
                    marginTop: 5
                },



            }
        }
    }

    render() {
        return (
            <div style={this.state.style.topBar}>
                <div className="row">
                    <p style={this.state.style.titleP}>
                        <span style={Color.SecondaryText}>{this.props.header.prenom} </span>
                        <span style={Color.SecondaryAccentText}>{this.props.header.nom}</span>
                    </p>
                    <p style={this.state.style.subtitleP}>
                        <span style={Color.SecondaryText}>
                            {this.props.header.tel} -&nbsp;
                        </span>
                        <span style={Color.SecondaryAccentText}>
                        {this.props.header.mail} -&nbsp;
                    </span>
                        <span>
                        <a href={this.props.header.git}>
                            <img src="assets/images/git.png" style={this.state.style.git}/>
                        </a>
                    </span>
                    </p>
                </div>
                <div className="row">
                    <div style={this.state.style.blocTitle}>
                        <span style={this.state.style.blocTitleSpan}>
                            {this.props.header.title}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}