import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <article className='sidebar__info'>This could be your ad.</article>
                <article className='sidebar__info'>This could be your ad.</article>
                <article className='sidebar__info'>This could be your ad.</article>
            </div>
        );
    }
}

export default Sidebar;