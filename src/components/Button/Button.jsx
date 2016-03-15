import React from 'react';
import styles from './Button.scss'

const Button = ({text,className}) => (
    <button className={className}>
        {text ? text : "Submit"}
    </button>
)

export default Button;
