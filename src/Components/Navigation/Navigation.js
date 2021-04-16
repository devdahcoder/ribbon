import React from 'react';

import { ReactComponent as YourSvg } from '../../Assets/images/house.svg';

//imported packages
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="mobile-nav">
            <ul className="mobile-ul">
                <li className="mobile li">
                    <Link to="/" className="mobile-nav-link">
                        <div className="mobile-link-display">
                            <YourSvg />
                        </div>
                    </Link>
                </li>
                <li className="mobile li">
                    <Link to="/activity" className="mobile-nav-link">
                        <div className="mobile-link-display"></div>
                    </Link>
                </li>
                <li className="mobile li">
                    <Link to="wallet" className="mobile-nav-link">
                        <div className="mobile-link-display"></div>
                    </Link>
                </li>
                <li className="mobile li">
                    <Link to="market" className="mobile-nav-link">
                        <div className="mobile-link-display"></div>
                    </Link>
                </li>
                <li className="mobile li">
                    <Link to="earn" className="mobile-nav-link">
                        <div className="mobile-link-display"></div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
