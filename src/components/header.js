import React from 'react';
import '../css/styles.css'

const Header = props => {
        const style = {
            background: 'red'
        }

        if (props.keywords !== ''){
            style.background = 'blue'
        }else{
            style.background = 'red'
        }

        return (
            <header style={style} className='header'>
                <div className='logo'>logo</div>
                <input type="text" 
                onChange={props.keywords}/>
            </header>
        )
}

export default Header;