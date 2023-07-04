import { Link } from "react-router-dom";
import './main-page.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import Title from "../../components/title";
export default function MainPage(){
    return(
    <div className="main-page">
        <Header/>
        <Title className={'main-title'} content={"Домашня робота з 'React'- гра 'Сапер' Влад Бродич"}/>
        <main className="main">
          <section className="main-section">
            <div className="main-section__info">
              <h2>Важлива інформація</h2>
              <p>“В Україні залишається близько 175 тис. кв. км потенційно небезпечних територій, що становить 30% від загальної площі держави. Ось чому зараз небезпечно виходити в поля та ліси на деокупованих територіях…  <br/>Тисячі протипіхотних та протитанкових мін залишив по собі ворог. Гине все живе! Будь ласка, будьте обережні”
              <br/> Потенційно небезпечні місця тепер можна побачити на сайті <a className="link-info" href="https://mine.dsns.gov.ua/" target="_blank" rel="noopener noreferrer"> Державної служби з надзвичайних ситуацій.</a></p>

              <Link  to={'/settings'}><p className="link-btn">Допоможи Патрону розмінувати Україну.<br/>Oбери регіон та почни гру!</p></Link>
            </div>
          </section>
        </main>


        <Footer/>

    </div>
    )
}