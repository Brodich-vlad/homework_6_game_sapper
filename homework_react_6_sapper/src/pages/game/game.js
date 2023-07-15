import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './game.css';
import GameSection from '../../components/game-section';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Title from '../../components/title';
import Text from '../../components/text';

import { dataPages } from '../../data-pages/data-pages';
import { dataPagesMobile } from '../../data-pages/data-pages-mobile';
import { searchObjPageGame} from '../../methods';
import SettingsPanel from '../../components/settings-panel';


export default function Game(){

    // Отримання id сторінки.
    const {id} = useParams();
 
    // Медіа запит Ширина екрану користувача.
    const mediaQuery = window.matchMedia('(max-width: 960px)');

    const [useMobile, setUseMobile] = useState(mediaQuery.matches);

    // Знаходимо обєкт сторінки по id.
    const [objPage, setObjPage] = useState(searchObjPageGame (useMobile ? dataPagesMobile : dataPages, id))
    
    // Забираємо обєкт налаштування гри.
    const [paramGame, setParamGame] = useState(objPage.paramGame);
    
    // Стан віконця інформації.
    const [infScreen, setInfoScreen] = useState(true);

    // Стан зміни параметрів гри якщо змынились параметри перезапустити гру.
    const [flag, setFlag] = useState(false);

    // Змінюемо обєкт сторінки якщо змінилась ширина екрана або id сторінки.
    useEffect(() => {
        function change  (ev) {
            if (ev.target.matches) {
            const arr = searchObjPageGame(dataPagesMobile, id)
            setObjPage(arr)
            setParamGame(arr.paramGame)  
            }
            else {
            const arr = searchObjPageGame(dataPages, id)
            setObjPage(arr)
            setParamGame(arr.paramGame)
            }
            setUseMobile(ev.target.matches)
        }
            mediaQuery.addEventListener('change', change,{once:true});
        return () => {
            mediaQuery.removeEventListener('change', change,{once:true});
        };
    },[mediaQuery,id]);

    //Функція Callback.
    const infoCallback =(state)=>{
        setInfoScreen(state)
    }

  // Функція  зміни параметрів гри якщо змынились параметри перезапустити гру.
    const callbakSet = (s) =>{
        setFlag(s)
    }
 
   //Функція зміни налаштувань.
    const clickOptions = (id) =>{
        setFlag(true)
        setParamGame({...paramGame,...id})
    }

    return(
        <div className={`game-page ${objPage.id}`}>
            <Header/>
            <main>
                <section className='section-mined-field'>
                    <Title content={objPage.title} className={'game-page__title'}/>

                    {id !=='use-game'? infScreen && <>
                    <a className={'game-page__info-link'} href={objPage.infoLink}target="_blank" rel="noopener noreferrer"><Text className={'game-page__info'} content={objPage.info}/></a>
                    <Text className={'game-page__text'} content={objPage.infoGame} /></>:null}
                    

                    {<SettingsPanel param={paramGame} click={clickOptions} flag={infScreen} flagPage={id ==='use-game' ? true : false}/>}


                    <GameSection  param={paramGame} bomb={objPage.img[1]} bomb_1={objPage.img[0]} callbak={infoCallback} flag={flag} callbakSet={callbakSet}/>

                </section>
            </main>
            <Footer/>
        </div>
    )
}