import { Link } from "react-router-dom";
import './main-page.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import Title from "../../components/title";
import icon from '../../img/svg-icon/reactjs_logo.svg'
import { useMobile } from '../../methods';
import play from '../../img/svg-icon/gaming_play.svg';

export default function MainPage(){
    return(
    <div className="main-page">
        <Header/>
        <Title className={'main-title'} content={<>Домашня робота <img className="icon-react" src={icon} alt="icon react"/> Онлайн гра 'Сапер'</>}/>
        <main className="main">
          <section className="main-section">
            <div className="main-section__info">
              <h2>Важлива інформація</h2>
              <p>“В Україні залишається близько 175 тис. кв. км потенційно небезпечних територій, що становить 30% від загальної площі держави. Ось чому зараз небезпечно виходити в поля та ліси на деокупованих територіях…  <br/>Тисячі протипіхотних та протитанкових мін залишив по собі ворог. Гине все живе! Будь ласка, будьте обережні”
              <br/> Потенційно небезпечні місця тепер можна побачити на сайті <a className="link-info" href="https://mine.dsns.gov.ua/" target="_blank" rel="noopener noreferrer"> Державної служби з надзвичайних ситуацій.</a></p>

              <Link  to={"/settings"}className="link-btn"><img className="link-btn-icon" src={play} alt="icon filter"/>{useMobile ? <>Допоможи Патрону розмінувати Україну.<br/>Почати гру!</>:<>Допоможи Патрону розмінувати Україну.<br/>Oбери регіон та почни гру!</>}</Link>
            </div>
          </section>
        </main>


        <Footer/>

    </div>
    )
}