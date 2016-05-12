import React from 'react';
import styles from './Tooltip.scss'

class Tooltip extends React.Component {
    render(){
        console.log(children)
        const {text, children} = this.props;
        return (
            <span className={styles.tooltip}>
            <strong>{text}</strong>
            <span className={styles.tooltip__content}>
                {children}
            </span>
        </span>
        )
    }
}

export default Tooltip;
