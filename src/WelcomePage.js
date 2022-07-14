import React from 'react';
import {Navigate} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

class WelcomePage extends React.Component {
    state = {
        vhod: true
    }

    onSubmitVhod = (event) => {
        event.persist();
        this.setState((prevState) => ({
            vhod: true
        }))
    }

    onSubmitRegister = (event) => {
        event.persist();
        this.setState((prevState) => ({
            vhod: false
        }))
    }

    render() {
        const {signup, login, isAuthenticated} = this.props;

        let classVhod = 'nav-link';
        let classRegister = 'nav-link';
        if (this.state.vhod) {
            classVhod = classVhod + ' active';
        } else {
            classRegister = classRegister + ' active';
        }

        if (isAuthenticated){
            return (
                <Navigate to="/" />
            )
        }
    return (
        <div className="card text-center">
            <div className="card-header">
                <button className="nav-item" onClick={this.onSubmitVhod}>
                    <p className={classVhod}>Вход</p>
                </button>
                <button className="nav-item" onClick={this.onSubmitRegister}>
                    <p className={classRegister}>Регистрация</p>
                </button>
            </div>
            <div className="card-body">
                {this.state.vhod ? (
                    <Login onSubmit={login} />
                ) : (
                    <Signup onSubmit={signup} />
                )
                }
            </div>
        </div>
    )
  }
}

export default WelcomePage;
