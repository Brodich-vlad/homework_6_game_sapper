import './footer.css';
import icon_mail from '../../img/svg-icon/e-mail.svg';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-nav">
                <a href="mailto:brodich_vlad@ukr.net"><img className='footer-nav__img' src={icon_mail} alt='icon'/>  brodich_vlad@ukr.net</a>
                <p>9 Липня 2023 р.</p>
            </div>
        </footer>
    )
}
