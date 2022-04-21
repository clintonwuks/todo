import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'


class LoginComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        //this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleOnChange(event) {
        console.log(event.target.value);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        //in28minutes,dummy
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password)
            this.props.navigatee(`/welcome/${this.state.username}`)
            //this.setState({ hasLoginFailed: false });
            //this.setState({ showSuccessMessage:true })

        }
        else {
            console.log('failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }

    }



    //handlePasswordChange(event) {
    //    console.log(event.target.value);
    //    this.setState({ password:event.target.value })
    //}

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <div className='container'>
                    {
                        /* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                         Commented out function does the same as one line jsx expression.. will return div
                         if this.state.hasLoginFailed is true.*/
                    }
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                    {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage} />*/}
                    UserName: <input type="text" name="username" value={this.state.username}
                        onChange={this.handleOnChange} />
                    Password: <input type="password" name="password" value={this.state.password}
                        onChange={this.handleOnChange} />
                    <button className='btn btn-success' onClick={this.loginClicked}>Login</button>
                </div>

            </div>
        );
    }
}

export default LoginComp