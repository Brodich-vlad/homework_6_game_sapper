import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/title';
import './settings.css';
import { dataPages } from '../../data-pages/data-pages';
import { dataPagesMobile } from '../../data-pages/data-pages-mobile';
import { getId } from '../../methods';
import Text from '../../components/text';
import map from '../../img/map.png'
import icon from '../../img/svg-icon/reactjs_logo.svg';
import { useState } from 'react';
import Accordion from '../../components/accordion/accordion';


export default function Settings (){

// Медіа запит Ширина екрану користувача.
const mediaQuery = window.matchMedia('(max-width: 960px)');
const [useMobile, setUseMobile] = useState(mediaQuery.matches)

mediaQuery.addEventListener('change',(ev)=>{
  setUseMobile(ev.target.matches)
},{once:true})


  const links = (data, flag)=>{
    return(
      data.map((el,i)=>{
        if(el.id === 'use-game'){return null}
          if(flag){
            return(
              <li className='section-settings__nav-item' key={getId(i)}>
                <Link className='section-settings__nav-item__link' to={'/game/'+ el.id}>
                  {<>{el.imgPrapor && <img className='nav-item__link-img' src={el.imgPrapor} alt={el.title}/>}  {el.title}</>}
                </Link>
              </li>
            ) 
          }
          else {
            return (
              <Link key={getId(i)} to={'/game/'+ el.id}>
                <area shape="poly" coords={el.btnCoords} alt={el.id} />
              </Link>
            )
          }
        })
    )
  }

  return(
    <div className="settings-page" >
      <Header/>
      <main>
        <section className="section-settings">

          <Title className={'settings-title'} content={<>Домашня робота <img className="icon-react" src={icon} alt="icon react"/> Онлайн гра 'Сапер'</>}/>

          {useMobile ? <Text className={'settings-text'} content={'Оберіть регіон зі списку який бажаєте розмінувати. Кожен регіон визначає складність гри,'}/>: <Text className={'settings-text'} content={'Оберіть регіон на мапі який бажаєте розмінувати. Кожен регіон визначає складність гри,'}/>}

          { useMobile 
              ? 
            <Accordion content={<ul className={"section-settings__nav"}>
            {links(dataPagesMobile, useMobile)}
            </ul>} textBtn={'оберіть регіон'}/>
              : 
            <><nav>
                <img className="section-settings__nav-img" src={map} alt="map" useMap="#workmap"/>
            </nav>
            <map name="workmap">
              {links(dataPages,useMobile)}
            </map></>
          }
            <Link className='use-game__btn' to={'/game/use-game'}>
            або оберіть свої налаштування.
          </Link>
        </section>
      </main>
    <Footer/>
  </div>
  )
}