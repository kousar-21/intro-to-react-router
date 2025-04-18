import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            {/* <nav>
                <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
            </nav> */}
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptop">laptop</Link>
                <Link to="/">Home</Link>
            </nav> */}
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptop">laptop</NavLink>
                <NavLink to="/">Home</NavLink>
            </nav>
        </div>
    );
};

export default Header;