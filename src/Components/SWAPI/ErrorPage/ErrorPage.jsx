import { Link } from 'react-router-dom';
import style from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>404</h1>
            <p className={style.text}>Page not fond</p>
            <p className={style.text}>Go <Link to='/'>Home</Link></p>
        </div>
    );
}

export default ErrorPage;