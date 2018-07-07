import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import "./style.css"

// COMPONENTS
import Home from './components/home';
import Profile from './components/profiles';
import Posts from './components/posts';
import PostItem from './components/post_item';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    Header
                    <br/>
                    <NavLink to="/">Home </NavLink><br/>
                    <NavLink to="/Profile">Profiles </NavLink><br/>
                    <NavLink to={{
                        pathname: '/posts'
                    }}>Posts </NavLink><br/>
                    <hr/>
                </header>
                <Route path="/posts" component={Posts} exact/>
                <Route path="/profile" component={Profile} exact/>
                <Route path="/posts/:id" component={PostItem} exact/>
                <Route path="/" component={Home} exact/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)