import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// COMPONENTS
import Home from './components/home';
import Profile from './components/profiles';
import Posts from './components/posts';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    Header
                    <br/>
                    <Link to="/">Home </Link><br/>
                    <Link to="/Profile">Profiles </Link><br/>
                    <Link to={{
                        pathname: '/posts'
                    }}>Posts </Link><br/>
                    <hr/>
                </header>
                <Route path="/posts" component={Posts} exact/>
                <Route path="/profile" component={Profile} exact/>
                <Route path="/" component={Home} exact/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)