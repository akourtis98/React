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
        const style = {
            background: 'red'
        }

        if (this.state.keywords !== ''){
            style.background = 'blue'
        }else{
            style.background = 'red'
        }

        return (
            <header style={style} className='header'>
                <div className='logo'>logo</div>
                <input type="text" 
                onChange={this.inputChangeHandler.bind(this)}/>
            </header>
        )
    }
}

export default Header;