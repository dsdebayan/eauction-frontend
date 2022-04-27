import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService';

const HeaderComponent = (props) => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
        <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div><a href="http://www.e-Auction.com" className="navbar-brand">e-Auction</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><a className="navbar-link">Fetch Details</a></li>}
                        
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
    )
}

export default HeaderComponent