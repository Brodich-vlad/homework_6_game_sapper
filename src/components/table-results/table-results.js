import './table-results.css';

export default function TableResults({numMines,numFlag,numClear,numNoClear}){
    return (
        <ul className="table-results">
            <li className="table-results__item">Кількість мін на полі: <span>{numMines}</span></li>
            <li className="table-results__item">Кількість встановлених прапорців: <span>{numFlag}</span></li>
            <li className="table-results__item">Кількість розмінованої тереторії: <span>{numClear}</span> з <span>{numNoClear}</span></li>
        </ul>
    )
}

