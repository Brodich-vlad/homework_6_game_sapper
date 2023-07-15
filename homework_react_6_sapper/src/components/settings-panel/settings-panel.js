import { useEffect, useState } from 'react';
import './settings-panel.css';
import gears from '../../img/svg-icon/gears.svg';

export default function SettingsPanel({click, param, flag, flagPage}){
    // Ширина екрану користувача.
    const [useWidth, setUseWidth] = useState(window.innerWidth - 100)
    // Стан параметру складність гри.
    const [maxMines, setMaxMines] = useState(param.maxMines);

     // Стан параметру розмір клітинки.
    const [cauntSize, setCauntSize] = useState(param.colSize);

     // Стан параметру кількість колонок.
    const [cauntСol, setCauntCol] = useState(param.numCol);

     // Стан параметру кількість рядків.
    const [cauntTerms, setСauntTerms] = useState(param.numTerms);

    // Стан віконця параметрів.
    const [openSettingsPanel, setOpenSettingsPanel] = useState(false);

    // Функція зміни параметрів.
    const changeCaunt = (el) =>{
        if(el === 'addSize' && cauntSize < 7 && cauntSize*cauntСol*10 < useWidth){
            let s = cauntSize + 1
            setCauntSize(s)
            click({'colSize':s})
        }
        if(el === 'minusSize' && cauntSize > 3 ){
            let s = cauntSize - 1
            setCauntSize(s)
            click({'colSize':s})
        }
        if(el === 'addCol' && cauntСol < 20 && cauntSize*cauntСol*10 < useWidth){
            let s = cauntСol + 1
            setCauntCol(s)
            click({'numCol':s})
        }
        if(el === 'minusCol' && cauntСol > 4 ){
            let s = cauntСol - 1
            setCauntCol(s)
            click({'numCol':s})
        }

        if(el === 'addTerm' && cauntTerms < 20){
            let s = cauntTerms + 1
            setСauntTerms(s)
            click({'numTerms':s})
        }
        if(el === 'minusTerm' && cauntTerms > 4 ){
            let s = cauntTerms - 1
            setСauntTerms(s)
            click({'numTerms':s})
        }

        if(el === 'easy'){
            let s = .1
            setMaxMines(s) 
            if(useWidth < 1060){
                click({numCol:6, maxMines:.1, colSize:5, "numTerms":cauntTerms}) 
            }
            else {
                click({numCol:8, maxMines:.1, colSize:5, "numTerms":cauntTerms})
            }
        }
        if(el === 'middle'){
            let s = .15
            setMaxMines(s) 
            if(useWidth < 1060){
                click({numCol:7, maxMines:.15, colSize:4, "numTerms":cauntTerms}) 
            }
            else {
                click({numCol:8, maxMines:.15, colSize:5, "numTerms":cauntTerms})
            }
        }
        if(el === 'hard'){
            let s = .2
            setMaxMines(s) 
            if(useWidth < 1060){
                click({numCol:7, maxMines:.2, colSize:4, "numTerms":cauntTerms}) 
            }
            else {
                click({numCol:15, maxMines:.2, colSize:5, "numTerms":cauntTerms})
            }
        }
        if (useWidth !== window.innerWidth - 100) {
            setUseWidth(window.innerWidth - 100)
        }
    }
    
    useEffect(()=>{
        if(!flag){
            setOpenSettingsPanel(false)
        }
        else return
    },[flag])

    const openSettings = () =>{
        if(openSettingsPanel){
            setOpenSettingsPanel(false) 
        }
        else setOpenSettingsPanel(true) 
    }
    const clouseSettings = (e) =>{
        setOpenSettingsPanel(false)
    }

    return(
        <div className={openSettingsPanel ? 'wrapper__settings-panel _show':'wrapper__settings-panel'}>
            <div className='settings-panel' onClick={()=>{
                clouseSettings()
            }}>
                {flagPage && <div className='settings-panel__level' onClick={(e)=>e.stopPropagation()}>
                   <h2 className='title'>Оберіть рівень гри:</h2>
                    <ul className='btns-level'>
                        <li onClick={()=>{changeCaunt("easy")}} className={maxMines === .1 ?'btn-level __activ':'btn-level'}>Легкий</li>
                        <li onClick={()=>{changeCaunt("middle")}} className={maxMines === .15 ?'btn-level __activ':'btn-level'}>Середній</li>
                        <li onClick={()=>{changeCaunt("hard")}} className={maxMines === .2 ?'btn-level __activ':'btn-level'}>Складний</li>
                    </ul>
                </div>}
                <div className='settings-panel__size'  onClick={(e)=>e.stopPropagation()}>
                    <h2 className='title'>Оберіть розмір клітинки:</h2>
                    <ul className='btns-size'>
                        <li onClick={()=>{changeCaunt("minusSize")}} className={cauntSize > 3 ?'btn-size __activ':'btn-size'}>&#8722;</li>
                        <li className='inffo-size' style={{width: cauntSize +'rem',height: cauntSize +'rem'}}></li>
                        <li onClick={()=>{changeCaunt("addSize")}}   className={cauntSize < 8 && cauntSize*cauntСol*10 < useWidth ?'btn-size __activ':'btn-size'}>&#43;</li>
                    </ul>
                </div>
                {flagPage && <div className='settings-panel__size' onClick={(e)=>e.stopPropagation()}>
                    <h2 className='title'>Оберіть кількість колонок:</h2>
                    <ul className='btns-size'>
                        <li onClick={()=>{changeCaunt("minusCol")}} className={cauntСol > 4 ?'btn-size __activ':'btn-size'}>&#8722;</li>
                        <li className='inffo-col'>{cauntСol}</li>
                        <li onClick={()=>{changeCaunt("addCol")}}   className={cauntСol < 20 && cauntSize*cauntСol*10 < useWidth ?'btn-size __activ':'btn-size'}>&#43;</li>
                    </ul>
                </div>}
                {flagPage && <div className='settings-panel__size' onClick={(e)=>e.stopPropagation()}>
                    <h2 className='title'>Оберіть кількість строк:</h2>
                    <ul className='btns-size'>
                        <li onClick={()=>{changeCaunt("minusTerm")}} className={cauntTerms > 4 ?'btn-size __activ':'btn-size'}>&#8722;</li>
                        <li className='inffo-col'>{cauntTerms}</li>
                        <li onClick={()=>{changeCaunt("addTerm")}}   className={cauntTerms < 20 ?'btn-size __activ':'btn-size'}>&#43;</li>
                    </ul>
                </div>}
            </div>
            <div className='wrapper-btn' onClick={()=>{
                openSettings()
            }}>
                <img src={gears}alt='btn'/>
            </div>
        </div>
    )
}