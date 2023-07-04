import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './game.css';
import GameSection from '../../components/game-section';
import { useParams } from 'react-router';
import TableResults from '../../components/table-results/table-results';
import { useState, useEffect } from 'react';
import Title from '../../components/title';
import Text from '../../components/text';

import { dataPages } from '../../data-pages/data-pages';
import { searchObjPageGame, changeResult, changeWin } from '../../methods';


export default function Game(){

    const {id} = useParams();
    const objPage = searchObjPageGame (dataPages, id);
    const paramGame = objPage.paramGame;
   
    const [mainGameOver,setMainGameOver] = useState(false)
    const [mainGameWin, setMainGameWin] = useState(false)
    const [endscreen, setEndscreen] = useState(false)

    //Таблиця результатів гри.
    const [result,setResult] = useState({
        numMines:0,
        numFlag:0,
        numClear:0,
        numNoClear:0,
    })

    const endContent = {win: <span>✔ Вітаю ви виграли! <br/> Кількість замінованих теріторій в Україні стала меньша на <span>{result.numClear} кв/км.</span></span> , loose: '💣 Бум! Нажаль ви програли. Спробуйте ще.'};
    const [infoA,setInfoA] = useState(null)
    const [infoB,setInfoB] = useState(null)
    const [infoC,setInfoC] = useState(null)
    const [restart, setRestart] = useState(false)

    useEffect(()=>{
        setResult(changeResult(infoA,infoB,infoC))
        if(mainGameWin === null){
            setMainGameWin(false)
            return
        }
        else if(infoA){setMainGameWin(changeWin(infoA,infoB,infoC))}
        
    },[infoA, infoB, infoC, mainGameWin ])

    useEffect(()=>{
        if(mainGameOver || mainGameWin){
            setEndscreen(true)
        }
        else return
    },[mainGameOver,mainGameWin])

    const closeEndscren = () => {
        setEndscreen(false)
    }


    //Функція колбек.
    // useCallback
    const resultGame =(e, gameOver, rest)=>{
        if(rest){setRestart(false)}
        
        if(gameOver){setMainGameOver(true)}

        if(e.id === 0){
            setInfoA(e)
        }
        else if(e.id === 1){
            setInfoB(e)
        }
        else if(e.id === 2){
            setInfoC(e)
        }
    }
   
     //Функція кнопки рестарт гри.
    const clickRestart = () =>{
        setRestart(true)
        setMainGameOver(false)
        setEndscreen(false)
    }


    return(
        <div className={`game-page ${objPage.id}`}>
            <Header/>
            <main>
                <section className='section-mined-field'>
                    <Title content={objPage.title} className={'game-page__title'}/>

                    {result.numFlag || result.numClear>0||mainGameOver?null:<>
                    <a href={objPage.infoLink}target="_blank" rel="noopener noreferrer"><Text className={'game-page__info'} content={objPage.info}/></a>
                    <Text className={'game-page__text'} content={objPage.infoGame}/>
                    </>}
                  
                    <TableResults numMines={result.numMines} numFlag={result.numFlag} numClear={result.numClear} numNoClear={result.numNoClear}/>
                    <ul className='game-page__list'>
                        <li className={infoA && !infoA.gameWin ? '':mainGameWin || mainGameOver?'':'__hide'}>
                            {paramGame[0] && <GameSection  param={paramGame[0]} colback={resultGame} idEl={0} flagGameOver={infoA && !infoA.gameWin ? mainGameOver: false} flagRestart={restart} bomb={objPage.img[1]} bomb_1={objPage.img[0]}/>}
                        </li>

                        <li className={infoB && !infoB.gameWin ? '':mainGameWin || mainGameOver?'':'__hide'}>
                            {paramGame[1] &&  <GameSection  param={paramGame[1]} colback={resultGame} idEl={1} flagGameOver={infoB && !infoB.gameWin ? mainGameOver: false} flagRestart={restart} bomb={objPage.img[0]} bomb_1={objPage.img[1]}/>}
                        </li>

                        <li  className={infoC && !infoC.gameWin ? '':mainGameWin || mainGameOver?'':'__hide'}>
                            {paramGame[2] &&  <GameSection  param={paramGame[2]} colback={resultGame} idEl={2} flagGameOver={infoC && !infoC.gameWin ? mainGameOver: false} flagRestart={restart} bomb={objPage.img[1]} bomb_1={objPage.img[0]}/>}
                        </li>
                    </ul>

                   {result.numFlag || result.numClear > 0 || mainGameOver ? <button className={"btn-start"} onClick={()=>{
                         clickRestart()
                    }} type="button">Почати нову гру</button>:null}

                    {endscreen ? <div className="endscreen" onClick={() => {
                      closeEndscren()  
                    }}>{
                mainGameWin?endContent.win:endContent.loose
            }</div>  : null}
                </section>
            </main>
            <Footer/>
        </div>
    )
}