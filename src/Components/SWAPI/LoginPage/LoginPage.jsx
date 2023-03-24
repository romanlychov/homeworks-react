import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../Contexts/LanguageContext";
import LanguageToggler from "../Togglers/LanguageToggler";
import style from './LoginPage.module.css';
import cn from 'classnames';

const LoginPage = (props) => {

    const { english } = useContext(LanguageContext);

    return (
        <div className={style.container}>
            <LanguageToggler />
            <div className={style.checkboxes__item}>
                <label className={cn(style.checkbox, style.styleCheckbox)}>
                    <input type='checkbox' checked={props.isLogin} onClick={props.loginToggler} />
                    <div className={style.checkbox__checkmark}></div>
                    <div className={style.checkbox__body}>{english ? 'Click to login' : 'Клацни, щоб увійти'}</div>
                </label>
            </div>
            <Link to='/SWAPI'><button className={cn(style.shineButton, props.isLogin ? '' : style.shineButtonDis)} disabled={!props.isLogin}>{english ? 'Login' : 'Увійти'}</button></Link>
        </div>
    );
}

export default LoginPage;