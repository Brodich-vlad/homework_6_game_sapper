import  React,{ useState } from 'react';
import { createGame, checkNeighborCells, changeInfoTable } from '../../methods/index.js';

import { useEffect } from 'react';
import PlayingField from '../playing-field/index.js'


export default function GameSection({param,colback,idEl,flagGameOver,flagRestart, bomb,bomb_1}){
    const{numCol,maxMines,colSize} = param;
    const objGame = createGame(numCol,maxMines,colSize)

    const [elementsGame, setElementsGame] = useState(objGame.elements);
    const [infoTableGame, setInfoTableGame] = useState({
        id:idEl,
        numMines:0,
        numFlag:0,
        numClear:0,
        numNoClear:0,
        gameWin:false,
    })
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        
        // bumGameOver(elementsGame)
   
    },[flagGameOver])


    useEffect(()=>{
        setInfoTableGame(changeInfoTable(elementsGame, infoTableGame.id))
    },[elementsGame,infoTableGame.id]);

    useEffect(()=>{
        if(flagRestart){
            setElementsGame(objGame.elements)
            setGameOver(false)
        }
        else return
    },[flagRestart,objGame.elements]);

    //   const test = () => {
    //      colback(infoTableGame,gameOver,flagRestart)
    // }

    //  if(infoTableGame.numNoClear > 0){
    //         // colback(infoTableGame,gameOver,flagRestart)
    //         test()
    // }

    useEffect(() => {
        

        if(infoTableGame.numNoClear > 0){
            colback(infoTableGame,gameOver,flagRestart)
            // test()
        }
        else return
    },[infoTableGame])



    useEffect(() => {
        
       
        if (flagGameOver  && !gameOver) {
            // test()
            //  setElementsGame(bumGameOver())
            bumGameOver()
            setGameOver(true);
        }
        else return

    });



    //Функція бомба кінець гри.
    const bumGameOver = (data = elementsGame)=>{
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
        // return arr
        setElementsGame(arr)
    }


 
    //Функція клік клітинка.
    const clickCell = (el, data=[])=>{
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
            // setElementsGame(bumGameOver(arrUse))
            bumGameOver(arrUse)
            setGameOver(true)
            return
        }
        // Якщо клітинка порожня перевіряємо сусідні.
        else if(neighborCell){
            setElementsGame(checkNeighborCells (arrUse,el.coordinates))
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

    return(
        <>
            <PlayingField data={elementsGame} boardStyle={objGame.boardStyle} onContex={onContex} clickCell={clickCell}/>
            
        </>
    )
}