import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/soda">SODA</Link></li>
                <li><Link to="/chips">CHIPS</Link></li>
                <li><Link to="/fresh">FRESH SARDINES</Link></li>

            </ul>
        </div>
    )
}

export default Nav;
