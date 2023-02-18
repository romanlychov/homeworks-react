import React from 'react';
import style from './Sidebar.module.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={style.sidebar}>
                <article className={style.sidebar__info}>This could be your ad.</article>
                <article className={style.sidebar__info}>This could be your ad.</article>
                <article className={style.sidebar__info}>This could be your ad.</article>
            </div>
        );
    }
}

export default Sidebar;