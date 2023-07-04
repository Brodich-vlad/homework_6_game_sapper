import { Link } from "react-router-dom";
import './header.css';
import logo from '../../img/logo.jpg'

export default function Header() {
    return(
        <header className="header">
            <nav className="header__nav">
                <Link className="header__nav-logo" to={'/'}>
                    <img src={logo} alt="logo"/>
                </Link>
                <ul className="header__nav-list">
                    <li className="header__nav-list__item">
                    <Link to={'/'}>На головну</Link>
                    </li>
                    <li className="header__nav-list__item">
                    <Link to={"/settings"}>Налаштування гри</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}