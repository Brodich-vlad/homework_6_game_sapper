import  React,{ useState, useEffect } from 'react';
import { createGame, checkNeighborCells, changeInfoTable } from '../../methods/index.js';

import PlayingField from '../playing-field/index.js'
import TableResults from '../table-results/table-results.js';
import Endscreen from '../endscreen/endscreen.js';

export default function GameSection({ param, bomb, bomb_1, callbak, flag, callbakSet}) {
    
    // Параметри гри.
    const { numCol, maxMines, colSize, numTerms } = param;
    
    // Обєкт гри.
    const [objGame, setObjGame] = useState(createGame(numCol, maxMines, colSize, numTerms));

    // Масив елементів гри.
    const [elementsGame, setElementsGame] = useState(objGame.elements);

    // Розмір ігрового поля.
    let boardStyle = { width: numCol * colSize + 'rem' };
    
    // Таблиця результатів гри.
    const [infoTableGame, setInfoTableGame] = useState({
        numMines: 0,
        numFlag: 0,
        numClear: 0,
        numNoClear: 0,
        gameWin: false,
    });

    // Стан гри.
    const [gameOver, setGameOver] = useState(false);

    // Стан повідомлення про завершення гри.
    const [endscreen, setEndscreen ] = useState(false);

     // Стан гри передати в компонент гри.
    useEffect(()=>{
        if(flag && gameOver){
            setGameOver(false) 
            callbakSet(false)
        }
    },[flag, gameOver, callbakSet])

    // Стан змінних налаштувань гри.
    useEffect(() => {
      const a = createGame(numCol, maxMines, colSize,numTerms)
      setObjGame(a)
    }, [numCol, maxMines, colSize, numTerms]);
    
    // Стан масиву елементів гри.
    useEffect(() => {
      setElementsGame(objGame.elements)
    }, [objGame.elements]);

    // Оновлення таблиці результатів. 
    useEffect(()=>{
        setInfoTableGame(changeInfoTable(elementsGame))
    }, [elementsGame]);
    
    // Оновлення стану перемога або програш.
    useEffect(()=>{
        if(infoTableGame.gameWin || gameOver){
            setEndscreen(true)  
        }
        else return
    },[infoTableGame, gameOver]);

    //Функція бомба кінець гри.
    const bumGameOver = (data)=>{
        const arr = data.map((el,i)=>{
            if(el.databomb){
                return{
                    ...el,
                    content: i % 2 === 0 ? <img src={bomb} alt='bomb'/>:<img src={bomb_1} alt='bomb'/>,
                    checked:true
                }
            }
            else {
                return {...el}
            }
        })
        return arr
    }

    // Функція подвійний клік на клітинку з номером.
    const dblClick = (el, data = []) => {
        // Як-що гра завершена - return.
        // Як-що клітинка вже натискалась або стоїть прапорець - return.
        if(el.dataNum === 0 || !el.checked || el.flag || infoTableGame.gameWin ||gameOver) {
            return;
        }
        else {
        setElementsGame(checkNeighborCells (data, el, true)) 
        }
    }

    //Функція клік клітинка.
    const clickCell = (el, data=[])=>{
        if(infoTableGame.numClear === 0){
            callbak(false)
        }
        // Як-що гра завершена - return.
        if(gameOver) return;

        // Як-що клітинка вже натискалась або стоїть прапорець - return.
        if(el.checked || el.flag || infoTableGame.gameWin) return;
        // Змінна клік на міну.
        let flagClickBomb = false,
        // Змінна клік на порожню клітинку.
        neighborCell = false,
    // Перевіряємо натиснуту клітинку.
        arrUse = data.map((e)=>{
            // Знаходимо натиснуту клітинку в масиві.
            if(e.coordinates === el.coordinates){
                // Як що міна.
                if(e.databomb){
                    console.log('bum')
                    flagClickBomb = true
                    return {...e}
                }
                else if(!e.checked && !e.flag){
                    // Як що клітинка порожня.
                    if(e.dataNum === 0){
                        neighborCell = true
                        return {
                            ...e,
                            checked:true,
                        } 
                    }
                    // Якщо клітинка з цифрою.
                    else{
                        return {
                            ...e,
                            checked:true,
                            content:e.dataNum,
                        }
                    }
                }
                else return {...e}
            }
            else return {...e}
        })

        // Як що натиснута міна кінець гри.
        if (flagClickBomb) {
            setElementsGame(bumGameOver(arrUse))

            // bumGameOver(arrUse)
            setGameOver(true)
            return
        }
        // Якщо клітинка порожня перевіряємо сусідні.
        else if(neighborCell){
            setElementsGame(checkNeighborCells (arrUse, el, false))
        }
        // Зберігаємо масив гри.
        else{
            setElementsGame(arrUse)
        }
        return
    }

    //Функція встановити або зняти прапорець.
    const onContex=(a,data)=>{
        if(a.checked || gameOver){
            return
        }
        else {
            let arr = data.map((el)=>{
                if(a.coordinates === el.coordinates){
                    if(el.flag){
                        return{
                            ...el,
                            flag:false,
                            content:false,
                        }
                    }
                    else{
                        return{
                            ...el,
                            flag:true,
                            content:'🚩',  
                        }  
                    }
                }
                else {
                    return {...el}
                }
            })
            setElementsGame(arr)
        }
    }

    // Функція клік рестарт.
    const clickRestart = () =>{
        setObjGame(createGame(numCol, maxMines, colSize, numTerms))
        setInfoTableGame({
            numMines: 0,
            numFlag: 0,
            numClear: 0,
            numNoClear: 0,
            gameWin: false,
        });
        setGameOver(false);
    }
   



  // Функція клік приховати повідомлення.
    const closeEndscren = () =>{
        setEndscreen(false)
    }


    return(
        <>
            <TableResults numMines={infoTableGame.numMines} numFlag={infoTableGame.numFlag} numClear={infoTableGame.numClear} numNoClear={infoTableGame.numNoClear}/>

            <PlayingField data={
                elementsGame
            } boardStyle={boardStyle} onContex={onContex} clickCell={clickCell} dblClick={dblClick} />
               
            <div className='wrapper__btn-start'>
                {infoTableGame.numFlag || infoTableGame.numClear > 0 || gameOver
                    ? 
                    <button className={"btn-start"} onClick={()=>{
                         clickRestart()
                    }} type="button">Почати нову гру</button>
                    :null
                }
            </div>

            {endscreen ? <Endscreen closeEndscren={closeEndscren}  flag={ infoTableGame.gameWin} info={infoTableGame.numClear}/> : null}
         
        </>
    )
}