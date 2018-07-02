import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
// COMPONENTS
import Header from './components/header.js';
import NewsList from './components/news_list.js'

class App extends Component{
    
    state = {
        news: JSON
    }
    render(){
        console.log(this.state.news);
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));