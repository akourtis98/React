import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setUser, logoutUser, clearCurrentUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// For client side routes that need user to be authed
import PrivateRoute from "./components/common/PrivateRoute";

// import Routes from './components/Routes';
import Navbar from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Homepage from "./components/layout/Homepage";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import Post from "./components/layout/Post";
import Login from "./components/auth/Login";
import CreatePost from "./components/layout/CreatePost";

import "./resources/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

// Check for token
if (localStorage.jwttoken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwttoken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwttoken);
  // Set user and isAuthenticated
  store.dispatch(setUser(decoded));
  // Check for expired token

  const currentTime = Date.now() / 555000;

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/CV" component={Contact} />
              <PrivateRoute exact path="/post/:id" component={Post} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/new" component={CreatePost} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
