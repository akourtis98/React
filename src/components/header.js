import React from 'react';
import '../css/styles.css'

const Header = props => {
        return (
            <header style={style} className='header'>
                <div className='logo'>logo</div>
                <input type="text" 
                onChange={props.keywords}/>
            </header>
        )
}

export default Header;