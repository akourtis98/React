import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component{
    state = {
        keywords: ''
    }

    inputChangeHandler(e){
        this.setState({
            keywords: e.target.value
        })
    }

    render(){
        return (
            <header className='header'>
                <div className='logo'>logo</div>
                <input type="text" 
                onChange={this.inputChangeHandler.bind(this)}/>
            </header>
        )
    }
}

export default Header;