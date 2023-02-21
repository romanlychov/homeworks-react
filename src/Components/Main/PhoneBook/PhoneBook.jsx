import React from "react";
import Contact from "./Contact/Contact";
import style from './PhoneBook.module.css';

class PhoneBook extends React.Component {
    render() {
        return (
            <div className={style.container}>

                <div className={style.titleDiv}>
                    <span>Name</span>
                    <span>Last name</span>
                    <span>Phone number</span>
                    <span>Delete contact?</span>
                </div>
                <Contact
                    state={this.props.state}
                    deleteContactButton={this.props.deleteContactButton}
                />
                <button className={style.addBTN} onClick={() => { this.props.addNewContact() }}>Add new contact</button>
            </div>
        );
    }
}

export default PhoneBook;