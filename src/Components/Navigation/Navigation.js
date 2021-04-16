import React from 'react';
import "./navigation.css"


//imported icons
import HomeIcon from '../../Assets/images/house.svg';
import ActivityIcon from '../../Assets/images/checklist.svg';
import WalletIcon from '../../Assets/images/purse.svg';
import MarketIcon from  '../../Assets/images/market.svg';
import EarnIcon from '../../Assets/images/giftbox.svg';

//imported packages
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="mobile-nav">
            <ul className="mobile-ul">
                <li className="mobile-li">
                    <Link to="/" className="mobile-nav-link active">
                        <div className="mobile-link-display">
                            <img src={HomeIcon} alt="home-icon"/>

                            <div className="mobile-nav-text">
                                <p>Home</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="mobile-li">
                    <Link to="/activity" className="mobile-nav-link">
                        <div className="mobile-link-display">
                            <img src={ActivityIcon} alt="activity-icon"/>
                            <div className="mobile-nav-text">
                                <p>Activity</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="mobile-li">
                    <Link to="wallet" className="mobile-nav-link">
                        <div className="mobile-link-display">
                            <img src={WalletIcon} alt="wallet-icon"/>

                            <div className="mobile-nav-text">
                                <p>Wallet</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="mobile-li">
                    <Link to="market" className="mobile-nav-link">
                        <div className="mobile-link-display">
                            <img src={MarketIcon} alt="market-icon"/>

                            <div className="mobile-nav-text">
                                <p>Market</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="mobile-li">
                    <Link to="earn" className="mobile-nav-link">
                        <div className="mobile-link-display">
                            <img src={EarnIcon} alt="earn-icon"/>

                            <div className="mobile-nav-text">
                                <p>Earn</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
