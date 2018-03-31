import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="https://meansdatabase.herokuapp.com/assets/means_logo_header-2b31c16501dcaaa15595be933a5a966b336cd9ecf7fb2907fe3143732986de69.png" />
            <nav className="nav">
                <li>
                    <a href="#">Log In</a>
                </li>
                <li>
                    <a href="#">Sign Up</a>
                </li>
                <li>
                    <a href="#">About</a>
                    <b className="caret"></b>
                </li>
            </nav>
        </div>
    );
}

export default Header;