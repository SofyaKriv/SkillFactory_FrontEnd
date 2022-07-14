import React from 'react';
import "./Signup.css"

class Signup extends React.Component {
    state = {
        username: {
            value: ''
        },
        email: {
            value: ''
        },
        password: {
            value: ''
        },
        repeatPassword: {
            value: ''
        }
    }

    handleInputChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        this.setState((prevState)=>({
            [name]: {
                ...prevState[name],
                value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password, repeatPassword } = this.state;
        this.props.onSubmit(username.value, email.value, password.value, repeatPassword.value);
    }

    render() {
        const { username, email, password, repeatPassword} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="username">
                    <label>Имя пользователя</label>
                    <input type="text" value={username.value} onChange={this.handleInputChange} className="form-control" name="username" aria-describedby="userHelp" placeholder="Введите имя пользователя" />
                </div>
                <div className="email">
                    <label>e-mail</label>
                    <input type="email" value={email.value} onChange={this.handleInputChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Введите e-mail" />
                </div>
                <div className="password">
                    <label>Пароль</label>
                    <input type="password" value={password.value} onChange={this.handleInputChange} className="form-control" name="password" placeholder="Введите пароль" />
                </div>
                <div className="password">
                    <label>Повторите пароль</label>
                    <input type="password" value={repeatPassword.value} onChange={this.handleInputChange} className="form-control" name="repeatPassword" placeholder="Введите пароль" />
                </div>
                <div className="buttonSubmit">
                    <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                </div>
            </form>
        )
    }
}

export default Signup;
