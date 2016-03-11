import React from 'react'
import className from 'classnames';

import styles from './App.css';

console.log(styles)

export default React.createClass({
    render(){
        let buttonClassName = className(styles.danger)
        return(
            <div>
                <h1>Test2</h1>
                <button className={buttonClassName}>I AM BUTTON </button>
            </div>
        )
    }
})
