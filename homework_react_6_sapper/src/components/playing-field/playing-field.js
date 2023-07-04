import { getId } from '../../methods/index.js';

    //Функція створення ігрового поля.
export default function PlayingField({data, boardStyle, onContex, clickCell}) {

    return(
        <div className="mined-field" style={boardStyle}>
            {
                data.map((e,i)=>{
                    return <div key={getId(i)} 
                    className={e.checked ? e.className + ' tile--checked':e.className} 
                    style={e.style} 
                    onContextMenu={(el)=>{
                        el.preventDefault()
                        onContex(e,data)
                    }}
                    onClick={()=>{
                        clickCell (e, data)
                    }}>{e.content}</div>
                    })
            }
        </div>
    )
}