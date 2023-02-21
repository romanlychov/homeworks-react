import React from "react";
import style from './InputElement.module.css';

class InputElement extends React.Component {
    render() {
        return (
            <input
                onChange={this.props.handleChange}
                value={this.props.value}
                placeholder={this.props.placeholder}
                name={this.props.name}
            ></input>
        );
    }
}

export default InputElement;