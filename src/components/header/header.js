import { Link } from "react-router-dom";
import './header.css';
import icon_house from '../../img/svg-icon/house.svg';
import manual from '../../img/svg-icon/user_manual.svg';
import play from '../../img/svg-icon/gaming_play.svg';

export default function Header() {

    return (
			<header className="header">
				<nav className="header__nav">
					<Link className="header__nav-logo" to={'/'}>
						<span class="logo_yllow">V</span>
						<span class="logo_blue">B</span>
					</Link>
					<ul className="header__nav-list">
						<li className="header__nav-list__item">
							<Link to={'/'}>
								<img className="header__nav-icon" src={icon_house} alt="icon house" />
								<span className="header__nav-text">На головну</span>
							</Link>
						</li>
						<li className="header__nav-list__item">
							<Link to={'/settings'}>
								<img className="header__nav-icon" src={play} alt="icon filter" />
								<span className="header__nav-text">Почати гру</span>
							</Link>
						</li>

						<li className="header__nav-list__item">
							<Link to={'/rules'}>
								<img className="header__nav-icon" src={manual} alt="icon manual" />
								<span className="header__nav-text">Правила гри</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
}