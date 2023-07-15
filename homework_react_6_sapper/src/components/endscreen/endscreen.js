import './endscreen.css';
import bum from '../../img/w200.gif';
import win from '../../img/win.gif';
import trophy from '../../img/icon-trophy.gif';
import { useEffect, useState } from 'react';

export default function Endscreen({closeEndscren, flag, info}){

  // Обєкт повідомлення про завершення гри.&#13218;
  const endContent = { win: <><img className='endscreen__win' src={trophy} alt='trophy'/><span>Вітаю ви виграли! <br /> Кількість замінованих теріторій в Україні стала меньша на <span>{info} кв.км.</span></span></>, loose: 'Нажаль ви програли. Спробуйте ще.' };
  
    // Початок повідомлення.
  const contentImg = flag ? <img className='endscreen-img' src={win} alt='bum' /> : <img className='endscreen-img' src={bum} alt='bum' />;
  
    // Кінець повідомлення.
  const contentText = <div className="endscreen"> {flag ? endContent.win : endContent.loose}</div>;

    // Стан повідомлення.
  const [contentEnd, setContentEnd] = useState(true);

  useEffect(() => {
        const timer = setTimeout(() => {
          setContentEnd(false)
        }, 1300);
      return () => clearTimeout(timer);
      },[]);

    return (
      <div className='wraper-endscreen' onClick={() => {
          closeEndscren()  
        }}>
        {contentEnd? contentImg:contentText}
      </div>
    )
}