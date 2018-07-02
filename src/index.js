import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
// COMPONENTS
import Header from './components/header.js';
import NewsList from './components/news_list.js'

class App extends Component{
    
    state = {
        news: JSON,
        filtered: []
    }
    
    getKeyword = (e) => {
        let keyword = e.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.index0f(keyword) > -1
        })

        this.setState({
            filtered
        })
    }

    render(){
        let newFiltered = this.state.filtered;
        let newsWhole = this.state.news
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={this.state.filtered.length === 0 ? 
                    newsWhole : newFiltered}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));