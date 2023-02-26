import React from 'react';
import style from './Contact.module.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                {this.props.state.phoneBook.map((item) => {
                    return (
                        <article key={item.id} className={style.contactCard}>
                            <span className={style.spanItem}>{item.name}</span>
                            <span className={style.spanItem}>{item.lastName}</span>
                            <span className={style.spanItem}>{item.phoneNumber}</span>
                            <button className={style.shineButton}
                                onClick={() => this.props.deleteContactButton(item.id)}>Delete contact</button>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default Contact;