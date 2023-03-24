import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../Contexts/LanguageContext';
import LanguageToggler from '../Togglers/LanguageToggler';
import style from './HomePage.module.css';

const HomePage = () => {

    const { english } = useContext(LanguageContext);

    const engAbout = `The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible 
                data source for all the data from the Star Wars canon universe! We've taken all the rich contextual stuff from the universe and 
                formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!`;
    const ukrAbout = `Star Wars API, або «swapi» (Swah-pee), є першим у світі кількісним і програмно доступним
                джерело даних для всіх даних із канонічного всесвіту Star Wars! Ми взяли весь багатий контекстний матеріал із Всесвіту та
                відформатований у щось зручніше для споживання за допомогою програмного забезпечення. Потім ми розмістили API на передній панелі, щоб ви могли отримати доступ до всього!`;

    return (
        <div className={style.container}>
            <div>
                <LanguageToggler />
                <h1>The Star Wars API</h1>
                <p>{english ? engAbout : ukrAbout}</p>

                <Link to='/login'><button>{english ? 'Authorization' : 'Авторизація'}</button></Link>
            </div>
        </div>
    );
}

export default HomePage