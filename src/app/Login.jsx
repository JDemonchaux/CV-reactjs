import React from 'react';

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                loginIcon: {
                    width: '100%',
                    textAlign: 'right'
                }
            }
        }
    }

    showLoginModal() {
        $('#modalLogin').openModal();
    }

    closeLoginModal() {
        $('#modalLogin').closeModal();
    }


    render() {
        return (
            <div>
                <div style={this.state.style.loginIcon}>
                    <a className="modal-trigger" href="#modalLogin" onClick={this.showLoginModal}><i
                        className="material-icons">account_box</i></a>
                </div>

                <div id="modalLogin" className="modal">
                    <div className="modal-content">
                        <h4>Login</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <label htmlFor="Username">Login</label>
                                        <input classID="Username" type="text"/>
                                    </div>
                                    <div className="input-field col s6">
                                        <label htmlFor="password">Password</label>
                                        <input classID="password" type="password"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Envoyer</a>
                        <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat"
                           onClick={this.closeLoginModal}>Fermer</a>
                    </div>
                </div>
            </div>

        )
    }

}