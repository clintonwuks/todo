import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import withNavigation from './withNavigation'
import withParams from './withParams'
import AuthenticationService from './AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComp from './LoginComp'
import ListToDosComponent from './ListToDosComponent'

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComp);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return (
            <div className="todoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>  
                        <Route path="*" element={<ErrorComponent />} />
                        <Route path="/" element={<LoginComponentWithNavigation/>} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/logout" element={<LogoutComponent />} />
                        <Route path="/welcome/:name" element={
                        <AuthenticatedRoute>
                            <WelcomeComponentWithParams />
                        </AuthenticatedRoute>
                        } />
                        <Route path="/todos" element={
                        <AuthenticatedRoute >
                            <ListToDosComponent />
                        </AuthenticatedRoute>
                        } />
                    </Routes>
                    <FooterComponent />
                </Router>
                { /*<LoginComp/>*/}
            </div>
        );
    }
}


class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1> You are logged out </h1>
                <div className='container'>
                    Thank you for using our app.
                </div>
            </>
        )

    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className='footer'>
                <span className='text-muted'> All Rights Reserved 2018 @in28minutes</span>
            </footer>
        )

    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedin = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedin)

        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dar bg-dark'>
                    <div><a href='http://www.in28minutes.com' className='navbar-brand'>in28Minutes</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedin && <li ><Link className='nav-link' to='/welcome/in28minutes'>Home</Link></li>}
                        {isUserLoggedin && <li ><Link className='nav-link' to='/todos'>Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isUserLoggedin && <li ><Link className='nav-link' to='/login'>Login</Link></li>}
                        {isUserLoggedin && <li ><Link className='nav-link' to='/Logout' onClick={AuthenticationService.logout}>Logout</Link></li>}    
                    </ul>
                </nav>
            </header>
        )

    }
}



class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>
                    Welcome {this.props.params.name}. You can manage your Todos <Link to='/todos'>here</Link>
                </div>
            </>
            )
        
    }
}

function ErrorComponent() {
    return <div>Error!!! COntact support</div>
}


export default TodoApp;