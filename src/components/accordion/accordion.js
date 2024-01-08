import './accordion.css';
import { useState } from 'react';

export default function Accordion({ content, textBtn, styleBtn }){

    const [open, setOpen] = useState(false);

    const clickOpen = (state) =>{
        state ? setOpen(false) : setOpen(true)
    }

    return(
        <div className='accordion'>
            <button style={styleBtn && styleBtn} onClick={()=>{clickOpen(open)}} className={open ? 'accordion-btn _open' : 'accordion-btn'} type='button'>{textBtn}</button>
            <div  onClick={()=>{clickOpen(open)}} className={open ? 'accordion-content _open': 'accordion-content'}>{content}</div>
        </div>
    )
}