import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/title';
import Text from '../../components/text';
import Accordion from '../../components/accordion';
import './rules-page.css';
import { rulesInfo } from '../../data-pages/data-rules-page';
import { getId } from '../../methods';
import { Link } from 'react-router-dom';


export default function RulesPage() {

    const createItems = (data) =>{
        const newArr = data.map(({info,image},i) => {
            return(
                <li key={getId(i)} className='section__list-item'>
                   {image && <img className='section__list-item__img' src={image} alt={'screen'} />}
                    <Text className={'section__list-item__text'} content={info}/>
                </li>
            )
        })
        return newArr
    }


    const createSection = (data) => {
        const newArr = data.map((el,i) => {
            return (
                <section key={getId(i)} className='rules-page__section'>
                    <Accordion  content={<ul className={'rules-page__section__list'}>
                    {createItems(el.items)}
                </ul>} textBtn={el.title} styleBtn={{width: '100%'}}/>
                </section>
            )
        })
        return newArr
    }

    return (
        <div className="rules-page">
            <Header/>
            <main className='rules-page__main'>

                <Title className={'rules-page__title'} content={'Правила гри "Сапер"'} />
                <div className='rules-page__sections'>
                    {createSection(rulesInfo)}
                    
                    <Link className='rules-page__link' to={"/settings"}>
                        <Text content={<>Вдалого розмінування! <br/>Почати гру.</>}/>
                    </Link>

                </div>
       
              
            </main>
            <Footer/>
        </div>
    )
}