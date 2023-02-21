import React from 'react';
import InputElement from '../InputElement/InputElement';
import style from './PhoneBookForm.module.css';

class PhoneBookForm extends React.Component {
    render() {
        let formVisibility = this.props.state.phoneBookForm;
        return (
            <div className={formVisibility ? style.formContainer : null}>
                <form className={formVisibility ? style.form : style.formHidden}>
                    <div className={style.formLeftDecoration}></div>
                    <div className={style.formRightDecoration}></div>
                    <div className={style.circle}></div>
                    <div className={style.formInner}>
                        <h3>New Contac</h3>
                        <InputElement
                            value={this.props.state.firstNameValue}
                            handleChange={this.props.handleChange}
                            name='firstNameValue'
                            placeholder='Name' />
                        <InputElement
                            value={this.props.state.lastNameValue}
                            handleChange={this.props.handleChange}
                            name='lastNameValue'
                            placeholder='Last name' />
                        <InputElement
                            value={this.props.state.phoneNumberValue}
                            handleChange={this.props.handleChange}
                            name='phoneNumberValue'
                            placeholder='Phone number' />
                        <button onClick={this.props.addContactButton}>Add contact</button>
                        <button onClick={this.props.cancelButton}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PhoneBookForm;