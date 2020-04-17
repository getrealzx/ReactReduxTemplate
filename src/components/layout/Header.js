import React from 'react';
import { Link } from 'react-router-dom'


const Header = (props) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper  blue-grey">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/container" >Container</Link></li>
                        <li><Link to="chart" >Chart</Link></li>
                        <li><Link to="/map" >Map</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header