import { Link } from "react-router-dom";
import Title from "../../components/title";
import "./error-page.css";

export default function ErrorPage(){
    return(
        <div className="error-page">
            <div className="error-page__box">
                <Title className={'error-page__title'} content={'Помилка 404 Нажаль такої сторінки не існує'}/>
                <Link to={'/'}><div className="error-page__btn" >Повернутися на головну сторінку</div></Link>
            </div>
        
        </div>
    )
}