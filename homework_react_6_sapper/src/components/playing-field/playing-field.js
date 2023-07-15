import { getId } from '../../methods/index.js';

    //Функція створення ігрового поля.
export default function PlayingField({data, boardStyle, onContex, clickCell, dblClick}) {

    return(
        <div className="mined-field" style={boardStyle}>
            {
                data.map((e,i)=>{
                    return <div key={getId(i)} 
                    className={e.checked ? e.className + ' tile--checked':e.className} 
                    style={e.style} 
                    onContextMenu={(ev)=>{
                        ev.preventDefault()
                        onContex(e,data)
                    }}
                
                    onDoubleClick={(ev) => {
                        ev.stopPropagation()    
                        ev.preventDefault(false)
                        dblClick(e, data)
                    }}

                    onClick={()=>{
                        clickCell (e, data)
                    }}
                        
                    >{e.content}</div>
                    })
            }
        </div>
    )
}