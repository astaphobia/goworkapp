import React from 'react'
import TopLogo from '@/../images/top-logo.png'
import { Link } from 'react-router-dom'

const TopNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container">
                <Link to={'/'} className="navbar-brand">
                    <img src={TopLogo} width="120px" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link">
                                Keseluruhan Kerja
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default TopNavigation