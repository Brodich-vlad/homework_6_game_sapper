import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/title';
import './settings.css';
import { dataPages } from '../../data-pages/data-pages';
import { getId } from '../../methods';
import Text from '../../components/text';
import map from '../../img/map.png'

export default function Settings (){

  const links = (data)=>{
    return(
      data.map((el,i)=>{
        return (
          <Link key={getId(i)} to={'/game/'+ el.id}>
            <area shape="poly" coords={el.btnCoords} alt={el.id} />
          </Link>
        )
      })
    )
  }

  return(
    <div className="settings-page">
      <Header/>
      <main>
        <section className="section-settings">
          <Title className={'settings-title'} content={"Домашня робота з 'React'- гра 'Сапер' Влад Бродич"}/>
          <Text className={'settings-text'} content={'Оберіть регіон на мапі який бажаєте розмінувати. Кожен регіон визначає складність гри.'}/>
          <nav className="section-settings__nav">
              <img className="section-settings__nav-img" src={map} alt="map" useMap="#workmap"/>
          </nav>
          <map name="workmap">

            {links(dataPages)}
          </map>
        </section>
      </main>
    <Footer/>
  </div>
  )
}